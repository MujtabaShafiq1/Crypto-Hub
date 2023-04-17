import { CreateTokenDto } from './dto/create-token-dto';
import { TokensRepository } from './tokens.repository';
export declare class TokensService {
    private tokensRepository;
    constructor(tokensRepository: TokensRepository);
    createToken(createTokenDto: CreateTokenDto): Promise<void>;
    deleteToken(token: string): Promise<void>;
}
