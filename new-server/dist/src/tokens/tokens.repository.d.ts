import { Repository } from 'typeorm';
import { CreateTokenDto } from './dto/create-token-dto';
import { UsersRepository } from '../users/users.repository';
import { Token } from './token.entity';
import { MailService } from 'src/mail/mail.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../auth/jwt/jwt-payload.interface';
export declare class TokensRepository extends Repository<Token> {
    private tokensRepository;
    private usersRepository;
    private jwtService;
    private mailService;
    constructor(tokensRepository: Repository<Token>, usersRepository: UsersRepository, jwtService: JwtService, mailService: MailService);
    generateJwt(payload: JwtPayload): string;
    createToken(createTokenDto: CreateTokenDto): Promise<void>;
}
