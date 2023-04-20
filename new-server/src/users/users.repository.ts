import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

// Exceptions
import {
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';

// Entities
import { User } from './user.entity';
import { Credentials } from 'src/credentials/credentials.entity';

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

  // find user
  async findUser(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { username: id },
    });

    if (!user) return null;
    return user;
  }

  // find user with credentials
  async findUserWithCredentials(id: string): Promise<User> {
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.credentials', 'credentials')
      .where('user.username = :id', { id })
      .getOne();
    if (!user) return null;
    return user;
  }

  // login user
  async login(user: LoginUserDto): Promise<User> {
    const foundUser = await this.findUserWithCredentials(user.username);
    if (!foundUser) throw new NotFoundException('User not found');

    const { password } = foundUser.credentials;
    const validPassword = await bcrypt.compare(user.password, password);
    if (!validPassword) throw new UnauthorizedException('Incorrect Password');

    return foundUser;
  }

  // register local user
  async registerLocalUser(
    user: RegisterLocalUserDto,
    credentials: Credentials,
  ): Promise<void> {
    const newUser = this.usersRepository.create({
      ...user,
      credentials,
    });
    await this.usersRepository.save(newUser);
  }

  // register user
  async registerSocialUser(user: RegisterSocialUserDto): Promise<User> {
    const foundUser = await this.findUser(user.username);
    if (foundUser) return foundUser;

    const newUser = this.usersRepository.create(user);
    const savedUser = await this.usersRepository.save(newUser);
    return savedUser;
  }
}
