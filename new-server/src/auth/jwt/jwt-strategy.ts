import { Strategy } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { UsersRepository } from '../../users/users.repository';
import { JwtPayload } from './jwt-payload.interface';
import { User } from '../../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private configService: ConfigService,
  ) {
    const extractJwtFromCookie = (req) => {
      let token = null;
      if (req.cookies) {
        token = req.signedCookies['access_token'];
        console.log(token);
      }
      return token;
    };

    super({
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
      jwtFromRequest: extractJwtFromCookie,
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload;
    const user = await this.usersRepository.findOne({
      where: { username: username },
    });
    if (!user) throw new UnauthorizedException('Please log in to continue');
    return user;
  }
}
