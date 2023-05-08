import { Injectable } from '@nestjs/common';
import { ConflictException } from '@nestjs/common/exceptions';
import { plainToClass } from 'class-transformer';

// JWT
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt/jwt-payload.interface';

// Services
import { UsersService } from 'src/users/users.service';
import { TokensService } from 'src/tokens/tokens.service';
import { MailService } from 'src/mail/mail.service';
import { CredentialsService } from 'src/credentials/credentials.service';

// DTOs
import { LoginUserDto } from 'src/users/dto/login-user-dto';
import { RegisterSocialUserDto } from 'src/users/dto/register-social-user-dto';
import { RegisterLocalUserDto } from 'src/users/dto/register-local-user-dto';
import { UserTokenDto } from 'src/users/dto/user-token.dto';

// Entities
import { User } from '../users/user.entity';
import { Token } from '../tokens/token.entity';
import { Credentials } from '../credentials/credentials.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private tokensService: TokensService,
    private mailService: MailService,
    private credentialsService: CredentialsService,
  ) {}

  generateJwt(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  // creating unverified user
  async token(user: RegisterLocalUserDto): Promise<void> {
    const foundUser: User = await this.usersService.findUser(user.username);
    if (foundUser) throw new ConflictException('Username already exist');
    const savedToken: Token = await this.tokensService.createToken(user);
    await this.mailService.sendUserConfirmation(user.username, savedToken);
  }

  // login in local user
  async login(user: LoginUserDto): Promise<string> {
    const foundUser: User = await this.usersService.login(user);
    return this.generateJwt({ username: foundUser.username });
  }

  // signup user
  async signUp(userToken: UserTokenDto): Promise<void> {
    const foundUser: Token = await this.tokensService.verifyToken(userToken);

    const { username, password } = foundUser;
    const userDetails = plainToClass(RegisterLocalUserDto, foundUser);

    const savedCredentials: Credentials =
      await this.credentialsService.saveCredentials({ username, password });
    await this.usersService.registerLocalUser(userDetails, savedCredentials);
    await this.mailService.accountCreation(foundUser.username, foundUser.name);
    await this.tokensService.deleteToken(userToken);
  }

  // signup social user
  async validateSocialUser(user: RegisterSocialUserDto): Promise<string> {
    const newUser: User = await this.usersService.registerSocialUser(user);
    return this.generateJwt({ username: newUser.username });
  }
}
