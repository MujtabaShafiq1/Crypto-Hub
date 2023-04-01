import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { GithubOauthGuard } from './github/github-oauth.guard';
import { GoogleOauthGuard } from './google/google-oauth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('google/login')
  @UseGuards(GoogleOauthGuard)
  async googleLogin() {
    return { msg: 'Google Authentication' };
  }

  @Get('github/login')
  @UseGuards(GithubOauthGuard)
  async githubLogin() {
    return { msg: 'Github Authentication' };
  }

  @Get('google/callback')
  @UseGuards(GoogleOauthGuard)
  async googleAuthCallback(@Req() req, @Res() res: Response) {
    const token = await this.authService.signIn(req.user);
    res.cookie('access_token', token, {
      maxAge: 3 * 24 * 60 * 60 * 1000,
      sameSite: true,
      secure: false,
    });
    return { token: token };
  }

  @Get('github/callback')
  @UseGuards(GithubOauthGuard)
  async githubAuthCallback(@Req() req, @Res() res: Response) {
    const token = await this.authService.signIn(req.user);
    res.cookie('access_token', token, {
      maxAge: 3 * 24 * 60 * 60 * 1000,
      sameSite: true,
      secure: false,
    });
    return { token: token };
  }
}
