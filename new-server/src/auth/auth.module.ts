import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';

// Services
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

// Modules
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from '../mail/mail.module';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';

// Strategies
import { GoogleStrategy } from './google/google-strategy';
import { GithubStrategy } from './github/github-strategy';
import { JwtStrategy } from './jwt/jwt-strategy';

// Entities
import { User } from '../users/user.entity';
import { Credentials } from '../credentials/credentials.entity';

@Module({
  imports: [
    MailModule,
    ConfigModule,
    UsersModule,
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
  providers: [AuthService, GoogleStrategy, GithubStrategy, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
