import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt/jwt-payload.interface';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { UsersRepository } from './users.repository';

// DTOs
import { RegisterSocialUserDto } from './dto/register-social-user-dto';
import { RegisterLocalUserDto } from './dto/register-local-user-dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  generateJwt(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  async login(user: RegisterLocalUserDto) {}

  async register(user: RegisterLocalUserDto) {}

  async validateSocialUser(user: RegisterSocialUserDto) {
    let foundUser = null;
    if (!user) throw new UnauthorizedException();
    foundUser = await this.usersRepository.findUser(user.username);
    if (!foundUser)
      foundUser = await this.usersRepository.registerSocialUser(user);
    return this.generateJwt({ username: foundUser.username });
  }
}
