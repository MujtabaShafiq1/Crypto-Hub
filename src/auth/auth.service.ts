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

  async validateUser(user: RegisterUserDto) {
    let foundUser = null;
    if (!user) throw new UnauthorizedException();
    foundUser = await this.usersRepository.findUser(user.socialMediaId);
    if (!foundUser) foundUser = await this.usersRepository.registerUser(user);
    const token = this.generateJwt({ id: foundUser.socialMediaId });
    return { token: token, user: foundUser };
  }
}
