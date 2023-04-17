import { Controller, Body, Post } from '@nestjs/common';
import { TokensService } from './tokens.service';

// DTO
import { CreateTokenDto } from './dto/create-token-dto';
import { RegisterTokenDto } from './dto/register-token-dto';

@Controller('tokens')
export class TokensController {
  constructor(private tokensService: TokensService) {}

  @Post()
  createToken(@Body() createTokenDto: CreateTokenDto) {
    this.tokensService.createToken(createTokenDto);
  }

  @Post('register')
  register(@Body() userToken: RegisterTokenDto) {
    return this.tokensService.registerUser(userToken);
  }
}
