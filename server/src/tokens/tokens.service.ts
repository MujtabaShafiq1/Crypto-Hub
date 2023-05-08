import { Injectable } from '@nestjs/common';
import { TokensRepository } from './tokens.repository';
import { Token } from './token.entity';
import { JwtService } from '@nestjs/jwt';
import { plainToClass } from 'class-transformer';
import * as bcrypt from 'bcrypt';

// Exceptions
import {
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common/exceptions';

// DTO
import { UserTokenDto } from 'src/users/dto/user-token.dto';
import { RegisterLocalUserDto } from 'src/users/dto/register-local-user-dto';
import { JwtPayload } from 'src/auth/jwt/jwt-payload.interface';

@Injectable()
export class TokensService {
  constructor(
    private jwtService: JwtService,
    private tokensRepository: TokensRepository,
  ) {}

  async verifyToken(userToken: UserTokenDto): Promise<Token> {
    try {
      this.jwtService.verify(userToken.token);
      const foundUser: Token = await this.tokensRepository.findToken(userToken);
      if (!foundUser) throw new NotFoundException('Invalid Token');
      return foundUser;
    } catch (e) {
      throw new NotAcceptableException('Token Expired , Sign-up again');
    }
  }

  async createToken(user: RegisterLocalUserDto): Promise<Token> {
    // Hash the password and token
    const salt: string = await bcrypt.genSalt(10);
    const hashedPassword: string = await bcrypt.hash(user.password, salt);

    const payload: JwtPayload = { username: user.username };

    const newToken: string = this.jwtService.sign({ payload });
    const plainTokenObject = { token: newToken };
    const savedToken = plainToClass(UserTokenDto, plainTokenObject);

    user.password = hashedPassword;
    return this.tokensRepository.createToken(user, savedToken);
  }

  async deleteToken(userToken: UserTokenDto): Promise<void> {
    return this.tokensRepository.deleteToken(userToken);
  }
}
