import { TokensService } from './tokens.service';
import { CreateTokenDto } from './dto/create-token-dto';
export declare class TokensController {
    private tokensService;
    constructor(tokensService: TokensService);
    createToken(createTokenDto: CreateTokenDto): void;
}
