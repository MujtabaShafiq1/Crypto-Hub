import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt/jwt-payload.interface';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { RegisterUserDto } from './dto/register-social-user-dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersRepository: UsersRepository,
  ) {}

  generateJwt(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  async signIn(user: RegisterUserDto) {
    if (!user) throw new UnauthorizedException();
    const foundUser = await this.usersRepository.checkId(user.socialMediaId);
    if (!foundUser) return this.registerUser(user);
    return this.generateJwt({ id: foundUser.socialMediaId });
  }

  async registerUser(registerUserDto: RegisterUserDto) {
    const newUser = this.usersRepository.create(registerUserDto);
    const user = await this.usersRepository.save(newUser);
    return this.generateJwt({ id: user.socialMediaId });
  }
}
