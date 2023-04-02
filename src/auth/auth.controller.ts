import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GithubAuthGuard } from './github/github-oauth.guard';
import { GoogleAuthGuard } from './google/google-oauth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Req() req) {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Req() req, @Res() res) {
    const token = await this.authService.validateUser(req.user);
    req.session.token = token;
    return res.redirect('http://localhost:3000');
  }

  @Get('github')
  @UseGuards(GithubAuthGuard)
  async githubAuth(@Req() req) {}

  @Get('github/callback')
  @UseGuards(GithubAuthGuard)
  async githubAuthRedirect(@Req() req, @Res() res) {
    const token = await this.authService.validateUser(req.user);
    req.session.token = token;
    return res.redirect('http://localhost:3000');
  }
}
