import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt-strategy';

// Modules
import { MailModule } from '../mail/mail.module';

// Strategies
import { GoogleStrategy } from './google/google-strategy';
import { GithubStrategy } from './github/github-strategy';

// Repositories
import { UsersRepository } from '../users/users.repository';
import { TokensRepository } from 'src/tokens/tokens.repository';

// Entities
import { User } from '../users/entities/user.entity';
import { Token } from '../tokens/token.entity';
import { Credentials } from '../users/entities/credentials.entity';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([User, Token, Credentials]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: 3600 },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy,
    GithubStrategy,
    JwtStrategy,
    UsersRepository,
  ],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
