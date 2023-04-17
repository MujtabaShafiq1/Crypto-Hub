import {
  Controller,
  UseGuards,
  Body,
  Get,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';

// Auth Guard
import { AuthGuard } from '@nestjs/passport';
import { GithubAuthGuard } from './github/github-oauth.guard';
import { GoogleAuthGuard } from './google/google-oauth.guard';

// Entities
import { User } from 'src/users/entities/user.entity';

// Decorators
import { GetUser } from './get-user.decorator';

// DTO
import { RegisterLocalUserDto } from 'src/users/dto/register-local-user-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  private setAccessTokenCookie(res, token) {
    res.cookie('access_token', token, { signed: true, httpOnly: true });
  }

  @Get('me')
  @UseGuards(AuthGuard())
  userCredentials(@GetUser() user: User) {
    return user;
  }

  @Get('login')
  login(@Req() req) {
    return this.authService.login(req.body);
  }

  // @Post('register')
  // register(@Body() user: RegisterLocalUserDto) {
  //   return this.authService.register(user);
  // }

  @Get('logout')
  logout(@Res() res) {
    res.clearCookie('access_token');
    res.redirect('http://localhost:3000/login');
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  googleAuth() {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Req() req, @Res() res) {
    const token = await this.authService.validateSocialUser(req.user);
    this.setAccessTokenCookie(res, token);
    return res.redirect('http://localhost:3000');
  }

  @Get('github')
  @UseGuards(GithubAuthGuard)
  githubAuth() {}

  @Get('github/callback')
  @UseGuards(GithubAuthGuard)
  async githubAuthRedirect(@Req() req, @Res() res) {
    const token = await this.authService.validateSocialUser(req.user);
    this.setAccessTokenCookie(res, token);
    return res.redirect('http://localhost:3000');
  }
}
