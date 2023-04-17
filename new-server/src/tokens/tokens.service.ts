import { Body, Injectable } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token-dto';
import { TokensRepository } from './tokens.repository';

@Injectable()
export class TokensService {
  constructor(private tokensRepository: TokensRepository) {}

  async createToken(createTokenDto: CreateTokenDto): Promise<void> {
    return this.tokensRepository.createToken(createTokenDto);
  }

  async deleteToken(@Body() token: string): Promise<void> {
    return this.tokensRepository.deleteToken(token);
  }
}
