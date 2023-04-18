import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';

// JWT
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt/jwt-payload.interface';

// Services
import { UsersService } from 'src/users/users.service';

// DTOs
import { LoginUserDto } from 'src/users/dto/login-user-dto';
import { RegisterSocialUserDto } from 'src/users/dto/register-social-user-dto';
import { RegisterLocalUserDto } from 'src/users/dto/register-local-user-dto';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  generateJwt(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  async login(user: LoginUserDto): Promise<void> {
    return this.usersService.login(user);
  }

  async validateSocialUser(user: RegisterSocialUserDto) {
    let foundUser = null;
    if (!user) throw new UnauthorizedException();
    foundUser = await this.usersService.findUser(user.username);
    if (!foundUser)
      foundUser = await this.usersService.registerSocialUser(user);
    return this.generateJwt({ username: foundUser.username });
  }
}
