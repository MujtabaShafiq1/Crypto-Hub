import { Controller, Body, Post } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { CreateTokenDto } from './dto/create-token-dto';

@Controller('tokens')
export class TokensController {
  constructor(private tokensService: TokensService) {}

  @Post()
  createToken(@Body() createTokenDto: CreateTokenDto) {
    this.tokensService.createToken(createTokenDto);
  }
}
