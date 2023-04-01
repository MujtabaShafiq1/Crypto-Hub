import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersRepository } from '../users.repository';
import { JwtPayload } from './jwt-payload.interface';
import { SocialMediaUser } from '../../users/entities/social-media-user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private configService: ConfigService,
    private usersRepository: UsersRepository,
  ) {
    const extractJwtFromCookie = (req) => {
      let token = null;
      if (req.cookies) {
        token = req.cookies['access_token'];
      }
      return token;
    };

    super({
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
      jwtFromRequest: extractJwtFromCookie,
    });
  }

  async validate(payload: JwtPayload): Promise<SocialMediaUser> {
    const { id } = payload;
    const user = await this.usersRepository.findOne({
      where: { socialMediaId: id },
    });
    if (!user) throw new UnauthorizedException('Please log in to continue');
    return user;
  }
}
