import { Repository } from 'typeorm';
import { RegisterSocialUserDto } from './dto/register-social-user-dto';
import { User } from './entities/user.entity';
export declare class UsersRepository extends Repository<User> {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findUser(id: string): Promise<User>;
    registerSocialUser(user: RegisterSocialUserDto): Promise<User>;
}
