import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokensController } from './tokens.controller';
import { TokensService } from './tokens.service';

// Cron Job
import { TokenCleanupService } from './TokenCleanupService';

// Modules
import { MailModule } from 'src/mail/mail.module';
import { CredentialsModule } from 'src/credentials/credentials.module';

// Repositories
import { TokensRepository } from './tokens.repository';

// Entities
import { Token } from './token.entity';
import { User } from '../users/user.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    ConfigModule,
    MailModule,
    UsersModule,
    CredentialsModule,
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
  providers: [TokenCleanupService, TokensService, TokensRepository],
  exports: [TokensService],
})
export class TokensModule {}
