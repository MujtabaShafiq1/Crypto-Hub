import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Credentials } from '../credentials/credentials.entity';
import { CredentialsDto } from 'src/credentials/dto/credentials-dto';

export class CredentialsRepository extends Repository<Credentials> {
  constructor(
    @InjectRepository(Credentials)
    private credentialsRepository: Repository<Credentials>,
  ) {
    super(
      credentialsRepository.target,
      credentialsRepository.manager,
      credentialsRepository.queryRunner,
    );
  }

  async saveCredentials(credentialsDto: CredentialsDto): Promise<Credentials> {
    const newCredentials = this.credentialsRepository.create(credentialsDto);
    await this.credentialsRepository.save(newCredentials);
    return newCredentials;
  }
}
