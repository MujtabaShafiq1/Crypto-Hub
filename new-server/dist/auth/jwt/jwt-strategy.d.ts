import { ConfigService } from '@nestjs/config';
import { UsersRepository } from '../../users/users.repository';
import { JwtPayload } from './jwt-payload.interface';
import { User } from '../../users/entities/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersRepository;
    private configService;
    constructor(usersRepository: UsersRepository, configService: ConfigService);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
