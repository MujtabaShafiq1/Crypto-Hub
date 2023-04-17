import { Injectable } from '@nestjs/common';
import { TokensRepository } from './tokens.repository';
import { Token } from './token.entity';

// DTO
import { CreateTokenDto } from './dto/create-token-dto';
import { RegisterTokenDto } from './dto/register-token-dto';

@Injectable()
export class TokensService {
  constructor(private tokensRepository: TokensRepository) {}

  async findToken(token: string): Promise<Token> {
    return this.tokensRepository.findToken(token);
  }

  async createToken(createTokenDto: CreateTokenDto): Promise<void> {
    return this.tokensRepository.createToken(createTokenDto);
  }

  async deleteToken(token: string): Promise<void> {
    return this.tokensRepository.deleteToken(token);
  }

  async registerUser(userToken: RegisterTokenDto): Promise<void> {
    return this.tokensRepository.registerUser(userToken);
  }
}
