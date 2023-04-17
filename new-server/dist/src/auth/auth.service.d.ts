import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt/jwt-payload.interface';
import { UsersRepository } from '../users/users.repository';
import { TokensRepository } from 'src/tokens/tokens.repository';
import { LoginUserDto } from 'src/users/dto/login-user-dto';
import { RegisterSocialUserDto } from 'src/users/dto/register-social-user-dto';
import { RegisterLocalUserDto } from 'src/users/dto/register-local-user-dto';
export declare class AuthService {
    private usersRepository;
    private tokenRepository;
    private jwtService;
    constructor(usersRepository: UsersRepository, tokenRepository: TokensRepository, jwtService: JwtService);
    generateJwt(payload: JwtPayload): string;
    login(user: LoginUserDto): Promise<void>;
    register(user: RegisterLocalUserDto): Promise<void>;
    validateSocialUser(user: RegisterSocialUserDto): Promise<string>;
}
