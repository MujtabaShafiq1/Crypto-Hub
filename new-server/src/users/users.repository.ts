import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// Entities
import { User } from './entities/user.entity';

// DTO
import { LoginUserDto } from './dto/login-user-dto';
import { RegisterLocalUserDto } from './dto/register-local-user-dto';
import { RegisterSocialUserDto } from './dto/register-social-user-dto';

export class UsersRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    super(
      usersRepository.target,
      usersRepository.manager,
      usersRepository.queryRunner,
    );
  }

  async findUser(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { username: id },
    });

    if (!user) return null;
    return user;
  }

  async login(user: LoginUserDto): Promise<void> {
    // return user;
  }

  async registerLocalUser(user: RegisterLocalUserDto): Promise<User> {
    const { password, ...otherDetails } = user;
    const newUser = this.usersRepository.create(otherDetails);
    const savedUser = await this.usersRepository.save(newUser);
    return savedUser;
  }

  async registerSocialUser(user: RegisterSocialUserDto): Promise<User> {
    const newUser = this.usersRepository.create(user);
    await this.usersRepository.save(newUser);
    return newUser;
  }
}
