import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { RegisterSocialUserDto } from './dto/register-social-user-dto';
import { User } from './entities/user.entity';

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

  async registerSocialUser(user: RegisterSocialUserDto): Promise<User> {
    try {
      const newUser = this.usersRepository.create(user);
      await this.usersRepository.save(newUser);
      return newUser;
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
