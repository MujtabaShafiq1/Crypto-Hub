import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';

// DTO
import { RegisterSocialUserDto } from './dto/register-social-user-dto';
import { RegisterLocalUserDto } from './dto/register-local-user-dto';
import { LoginUserDto } from './dto/login-user-dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  async findUser(id: string): Promise<User> {
    return this.usersRepository.findUser(id);
  }

  async login(user: LoginUserDto): Promise<void> {
    // return user
    this.usersRepository.login(user);
  }

  async registerLocalUser(user: RegisterLocalUserDto): Promise<User> {
    return this.usersRepository.registerLocalUser(user);
  }

  async registerSocialUser(user: RegisterSocialUserDto): Promise<User> {
    return this.usersRepository.registerSocialUser(user);
  }
}
