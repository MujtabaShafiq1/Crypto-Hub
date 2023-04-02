import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable cors
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://localhost:3000',
    credentials: true,
  });

  const configService = app.get(ConfigService);

  app.use(
    session({
      secret: configService.get('COOKIE_KEY'),
      saveUninitialized: false,
      resave: false,
      cookie: {
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000,
      },
    }),
  );

  // initialize passport
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(8000);
}

bootstrap();
