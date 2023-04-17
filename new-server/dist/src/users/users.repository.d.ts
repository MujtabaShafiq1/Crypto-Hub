import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user-dto';
import { RegisterLocalUserDto } from './dto/register-local-user-dto';
import { RegisterSocialUserDto } from './dto/register-social-user-dto';
export declare class UsersRepository extends Repository<User> {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findUser(id: string): Promise<User>;
    login(user: LoginUserDto): Promise<void>;
    registerLocalUser(user: RegisterLocalUserDto): Promise<void>;
    registerSocialUser(user: RegisterSocialUserDto): Promise<User>;
}
