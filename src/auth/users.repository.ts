import { InjectRepository } from '@nestjs/typeorm';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-social-user-dto';
import { SocialMediaUser } from '../users/entities/social-media-user.entity';

export class UsersRepository extends Repository<SocialMediaUser> {
  constructor(
    @InjectRepository(SocialMediaUser)
    private usersRepository: Repository<SocialMediaUser>,
  ) {
    super(
      usersRepository.target,
      usersRepository.manager,
      usersRepository.queryRunner,
    );
  }

  async checkId(id: string): Promise<SocialMediaUser> {
    const user = await this.usersRepository.findOne({
      where: { socialMediaId: id },
    });

    if (!user) return null;
    return user;
  }

  async registerUser(
    registerUserDto: RegisterUserDto,
  ): Promise<SocialMediaUser> {
    try {
      const newUser = this.usersRepository.create(registerUserDto);
      await this.usersRepository.save(newUser);
      return newUser;
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
