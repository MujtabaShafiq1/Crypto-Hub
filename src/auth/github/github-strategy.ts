import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) {
    super({
      clientID: configService.get('GITHUB_CLIENT_ID'),
      clientSecret: configService.get('GITHUB_CLIENT_SECRET'),
      callbackURL: 'http://localhost:8000/auth/github/callback',
      scope: ['profile', 'email'],
      successRedirect: '/',
      failureRedirect: '/login',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ): Promise<any> {
    const { id, username, displayName, photos } = profile;
    const user = {
      socialMediaId: id,
      name: displayName,
      username: username,
      avatar: photos[0].value,
      accessToken,
      refreshToken,
    };
    return this.authService.signIn(user);
  }
}
