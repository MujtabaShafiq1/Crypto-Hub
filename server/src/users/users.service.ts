import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

// Exceptions
import {
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';

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
    const foundUser: User = await this.usersRepository.findUserWithCredentials(
      user.username,
    );
    if (!foundUser) throw new NotFoundException('User not found');

    const { password } = foundUser.credentials;
    const validPassword: boolean = await bcrypt.compare(
      user.password,
      password,
    );
    if (!validPassword) throw new UnauthorizedException('Incorrect Password');

    return foundUser;
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
