import { Injectable } from '@nestjs/common';
// import { Cron } from '@nestjs/schedule';
// import { LessThanOrEqual } from 'typeorm';
import { TokensRepository } from './tokens.repository';

@Injectable()
export class TokenCleanupService {
  constructor(private readonly tokensRepository: TokensRepository) {}

  //   @Cron('0 0 * * *') // run every day at midnight
  //   async deleteExpiredTokens() {
  //     const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000); // calculate date 3 days ago
  //     await this.tokensRepository.delete({
  //       created_at: LessThanOrEqual(threeDaysAgo),
  //     });
  //   }
}
