import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt/jwt-payload.interface';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { RegisterSocialUserDto } from './dto/register-social-user-dto';
import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';

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

  async validateUser(user: RegisterSocialUserDto) {
    let foundUser = null;
    if (!user) throw new UnauthorizedException();
    foundUser = await this.usersRepository.findUser(user.username);
    if (!foundUser) foundUser = await this.usersRepository.registerUser(user);
    return this.generateJwt({ username: foundUser.username });
  }
}
