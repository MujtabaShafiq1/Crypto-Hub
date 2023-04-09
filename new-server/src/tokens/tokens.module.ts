import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokensController } from './tokens.controller';
import { TokensService } from './tokens.service';

// Cron Job
import { TokenCleanupService } from './TokenCleanupService';

// Mail Module
import { MailModule } from 'src/mail/mail.module';

// Repositories
import { TokensRepository } from './tokens.repository';
import { UsersRepository } from '../users/users.repository';

// Entities
import { Token } from './token.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    ConfigModule,
    MailModule,
    TypeOrmModule.forFeature([Token, User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '3d' },
      }),
    }),
  ],
  controllers: [TokensController],
  providers: [
    TokenCleanupService,
    TokensService,
    TokensRepository,
    UsersRepository,
  ],
})
export class TokensModule {}
