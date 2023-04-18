import { Injectable } from '@nestjs/common';
import { CredentialsRepository } from './credentials.repository';
import { CredentialsDto } from './dto/credentials-dto';
import { Credentials } from './credentials.entity';

@Injectable()
export class CredentialsService {
  constructor(private credentialsRepository: CredentialsRepository) {}

  async saveCredentials(credentialsDto: CredentialsDto): Promise<Credentials> {
    return this.credentialsRepository.saveCredentials(credentialsDto);
  }
}
