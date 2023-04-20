import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Repository } from 'typeorm';

import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../auth/jwt/jwt-payload.interface';
import * as bcrypt from 'bcrypt';

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

    private jwtService: JwtService,
  ) {
    super(
      tokensRepository.target,
      tokensRepository.manager,
      tokensRepository.queryRunner,
    );
  }

  generateJwt(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  // find token
  async findToken(userToken: UserTokenDto): Promise<Token> {
    const foundToken = await this.tokensRepository
      .createQueryBuilder('token')
      .select([
        'token.name',
        'token.username',
        'token.avatar',
        'token.password',
      ])
      .where('token.token LIKE :token', { token: `${userToken.token}` })
      .getOne();
    return foundToken;
  }

  // delete token
  async deleteToken(userToken: UserTokenDto): Promise<void> {
    await this.tokensRepository
      .createQueryBuilder('token')
      .delete()
      .where('token.token LIKE :token', { token: `${userToken.token}` })
      .execute();
  }

  // create token
  async createToken(user: RegisterLocalUserDto): Promise<Token> {
    const { username, password, ...otherDetails } = user;

    // Hash the password and token
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const token = this.generateJwt({ username });

    // Storing the record
    const newToken = this.tokensRepository.create({
      username,
      password: hashedPassword,
      token,
      ...otherDetails,
    });
    const savedToken = await this.tokensRepository.save(newToken);
    return savedToken;
  }

  // verify token
  async verifyToken(userToken: UserTokenDto): Promise<Token> {
    // verify token as well here
    const foundUser = await this.findToken(userToken);
    if (!foundUser) throw new NotFoundException('Invalid Token');
    return foundUser;
  }
}
