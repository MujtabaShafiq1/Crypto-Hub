import { AuthService } from './auth.service';
import { User } from 'src/users/entities/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    private setAccessTokenCookie;
    userCredentials(user: User): User;
    login(req: any): Promise<void>;
    register(req: any): Promise<void>;
    logout(res: any): void;
    googleAuth(): void;
    googleAuthRedirect(req: any, res: any): Promise<any>;
    githubAuth(): void;
    githubAuthRedirect(req: any, res: any): Promise<any>;
}
