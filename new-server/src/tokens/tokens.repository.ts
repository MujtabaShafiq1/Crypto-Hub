import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Entity
import { Token } from './token.entity';

// DTO
import { RegisterLocalUserDto } from 'src/users/dto/register-local-user-dto';
import { UserTokenDto } from 'src/users/dto/user-token.dto';

@Injectable()
export class TokensRepository extends Repository<Token> {
  constructor(
    @InjectRepository(Token)
    private tokensRepository: Repository<Token>,
  ) {
    super(
      tokensRepository.target,
      tokensRepository.manager,
      tokensRepository.queryRunner,
    );
  }

  // find token
  async findToken(userToken: UserTokenDto): Promise<Token> {
    const foundToken: Token = await this.tokensRepository
      .createQueryBuilder('token')
      .addSelect('token.password')
      .where('token.token LIKE :token', { token: `${userToken.token}` })
      .getOne();
    return foundToken;
  }

  // create token
  async createToken(
    user: RegisterLocalUserDto,
    token: UserTokenDto,
  ): Promise<Token> {
    const newToken: Token = this.tokensRepository.create({ ...user, ...token });
    const savedToken: Token = await this.tokensRepository.save(newToken);
    return savedToken;
  }

  // delete token
  async deleteToken(userToken: UserTokenDto): Promise<void> {
    await this.tokensRepository
      .createQueryBuilder('token')
      .delete()
      .where('token.token LIKE :token', { token: `${userToken.token}` })
      .execute();
  }
}
