import { Controller, UseGuards, Get, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GithubAuthGuard } from './github/github-oauth.guard';
import { GoogleAuthGuard } from './google/google-oauth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  private setAccessTokenCookie(res, token) {
    res.cookie('access_token', token, { signed: true, httpOnly: true });
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  googleAuth() {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Req() req, @Res() res) {
    const token = await this.authService.validateUser(req.user);
    this.setAccessTokenCookie(res, token);
    return res.redirect('http://localhost:3000');
  }

  @Get('github')
  @UseGuards(GithubAuthGuard)
  githubAuth() {}

  @Get('github/callback')
  @UseGuards(GithubAuthGuard)
  async githubAuthRedirect(@Req() req, @Res() res) {
    const token = await this.authService.validateUser(req.user);
    this.setAccessTokenCookie(res, token);
    return res.redirect('http://localhost:3000');
  }
}
