import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';

// Services
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

// Modules
import { ConfigModule } from '@nestjs/config';
import { MailModule } from 'src/mail/mail.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

// Strategies
import { GoogleStrategy } from './google/google-strategy';
import { GithubStrategy } from './github/github-strategy';
import { JwtStrategy } from './jwt/jwt-strategy';

// Repositories
import { UsersRepository } from '../users/users.repository';

// Entities
import { User } from '../users/entities/user.entity';
import { Credentials } from '../users/entities/credentials.entity';

@Module({
  imports: [
    MailModule,
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([User, Credentials]),
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
