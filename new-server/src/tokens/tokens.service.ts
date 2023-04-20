import { Injectable } from '@nestjs/common';
import { TokensRepository } from './tokens.repository';
import { Token } from './token.entity';

// DTO
import { UserTokenDto } from 'src/users/dto/user-token.dto';
import { RegisterLocalUserDto } from 'src/users/dto/register-local-user-dto';

@Injectable()
export class TokensService {
  constructor(private tokensRepository: TokensRepository) {}

  async findToken(userToken: UserTokenDto): Promise<Token> {
    return this.tokensRepository.findToken(userToken);
  }

  async createToken(user: RegisterLocalUserDto): Promise<Token> {
    return this.tokensRepository.createToken(user);
  }

  async deleteToken(userToken: UserTokenDto): Promise<void> {
    return this.tokensRepository.deleteToken(userToken);
  }

  async verifyToken(user: UserTokenDto): Promise<Token> {
    return this.tokensRepository.verifyToken(user);
  }
}
