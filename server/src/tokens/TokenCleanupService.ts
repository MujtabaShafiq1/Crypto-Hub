import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { TokensRepository } from './tokens.repository';
import { logger } from 'src/middlewares/app.log';

@Injectable()
export class TokenCleanupService {
  constructor(private readonly tokensRepository: TokensRepository) {}

  @Cron('0 0 * * *') // run every day at midnight
  async deleteExpiredTokens() {
    logger.info(`Cronjob Running`);
    await this.tokensRepository.deleteExpiredTokens();
  }
}
