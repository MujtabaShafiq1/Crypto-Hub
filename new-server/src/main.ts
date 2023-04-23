import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { TransformInterceptor } from './transform.interceptor';
import { AppModule } from './app.module';
import { logger } from './middlewares/app.log';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable cors
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://localhost:3000',
    credentials: true,
  });

  const configService = app.get(ConfigService);
  app.use(cookieParser(configService.get('COOKIE_KEY')));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new TransformInterceptor());

  // server start
  const PORT = 8000;
  await app.listen(PORT);
  logger.info(`Server started on port ${PORT}`);
}

bootstrap();
