import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTokenDto } from './dto/create-token-dto';
import { UsersRepository } from '../users/users.repository';
import { Token } from './token.entity';

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
}
