import { Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtPayload } from './jwt-payload.interface';
import { PassportStrategy } from '@nestjs/passport';

// Services
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';

// Entities
import { User } from '../../users/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
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
    const user = await this.usersService.findUser(payload.username);
    if (!user) throw new UnauthorizedException('Please log in to continue');
    return user;
  }
}
