import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) {
    super({
      clientID: configService.get('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
      callbackURL: 'http://localhost:8000/auth/google/callback',
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
    const { id, name, emails, photos } = profile;
    const user = {
      socialMediaId: id,
      name: name.givenName + ' ' + name.familyName,
      username: emails[0].value,
      avatar: photos[0].value,
      accessToken,
      refreshToken,
    };
    return this.authService.signIn(user);
  }
}
