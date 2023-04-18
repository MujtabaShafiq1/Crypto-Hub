import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// Services
import { CredentialsService } from 'src/credentials/credentials.service';

// Entities
import { User } from './user.entity';

// DTO
import { LoginUserDto } from './dto/login-user-dto';
import { RegisterLocalUserDto } from './dto/register-local-user-dto';
import { RegisterSocialUserDto } from './dto/register-social-user-dto';

export class UsersRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    private credentialsService: CredentialsService,
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

  // login user
  async login(user: LoginUserDto): Promise<void> {
    // return user;
  }

  // register local user
  async registerLocalUser(user: RegisterLocalUserDto): Promise<User> {
    const { password, ...otherDetails } = user;

    const savedCredentials = await this.credentialsService.saveCredentials({
      username: otherDetails.username,
      password,
    });

    const newUser = this.usersRepository.create({
      ...otherDetails,
      credentials: savedCredentials,
    });
    const savedUser = await this.usersRepository.save(newUser);

    return savedUser;
  }

  // register social user
  async registerSocialUser(user: RegisterSocialUserDto): Promise<User> {
    const newUser = this.usersRepository.create(user);
    await this.usersRepository.save(newUser);
    return newUser;
  }
}
