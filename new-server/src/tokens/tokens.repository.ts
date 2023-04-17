import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Exceptions
import { ConflictException, NotFoundException } from '@nestjs/common';

// Repository
import { UsersRepository } from '../users/users.repository';

// Entity
import { Token } from './token.entity';

// DTO
import { CreateTokenDto } from './dto/create-token-dto';
import { RegisterTokenDto } from './dto/register-token-dto';

import { MailService } from 'src/mail/mail.service';

import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../auth/jwt/jwt-payload.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TokensRepository extends Repository<Token> {
  constructor(
    @InjectRepository(Token)
    private tokensRepository: Repository<Token>,

    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,

    private jwtService: JwtService,
    private mailService: MailService,
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

  async findToken(token: string): Promise<Token> {
    const foundToken = await this.tokensRepository
      .createQueryBuilder('token')
      .select([
        'token.name',
        'token.username',
        'token.avatar',
        'token.password',
      ])
      .where('token.token LIKE :token', { token: `${token}` })
      .getOne();
    return foundToken;
  }

  async deleteToken(token: string): Promise<void> {
    await this.tokensRepository.delete(token);
  }

  async createToken(createTokenDto: CreateTokenDto): Promise<void> {
    const { username, password, ...otherDetails } = createTokenDto;

    // Find user with the same username in User entity
    const user = await this.usersRepository.findUser(username);
    if (user) throw new ConflictException('Username already exist');

    // Hash the password and create token in Token entity
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generating token
    const token = this.generateJwt({ username });

    // Storing the record
    const newToken = this.tokensRepository.create({
      username,
      password: hashedPassword,
      token,
      ...otherDetails,
    });
    const savedToken = await this.tokensRepository.save(newToken);

    // Sending Confirmation email to user
    if (savedToken)
      await this.mailService.sendUserConfirmation(username, token);
  }

  async registerUser(userToken: RegisterTokenDto): Promise<void> {
    const foundUser = await this.findToken(userToken.token);
    if (!foundUser) throw new NotFoundException('Invalid Token');

    const user = await this.usersRepository.registerLocalUser({
      ...foundUser,
      isLocal: true,
    });

    if (user) await this.deleteToken(userToken.token);

    await this.mailService.accountCreation(foundUser.name);
  }
}
