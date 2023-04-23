import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';

// Entity
import { User } from './user.entity';
import { Credentials } from 'src/credentials/credentials.entity';

// DTO
import { LoginUserDto } from './dto/login-user-dto';
import { RegisterSocialUserDto } from './dto/register-social-user-dto';
import { RegisterLocalUserDto } from './dto/register-local-user-dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  async findUser(id: string): Promise<User> {
    return this.usersRepository.findUser(id);
  }

  async login(user: LoginUserDto): Promise<User> {
    return this.usersRepository.login(user);
  }

  async registerLocalUser(
    user: RegisterLocalUserDto,
    credentials: Credentials,
  ): Promise<void> {
    return this.usersRepository.registerLocalUser(user, credentials);
  }

  async registerSocialUser(user: RegisterSocialUserDto): Promise<User> {
    return this.usersRepository.registerSocialUser(user);
  }
}
