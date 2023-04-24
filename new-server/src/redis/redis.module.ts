import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import { RedisCacheService } from './redis.service';
import { logger } from 'src/middlewares/app.log';

@Module({
  imports: [
    CacheModule.registerAsync<any>({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const store = await redisStore({
          socket: {
            host: configService.get('REDIS_HOST'),
            port: +configService.get('REDIS_PORT'),
          },
          ttl: 10,
        });
        return {
          store: () => store,
        };
      },
    }),
  ],
  providers: [RedisCacheService],
  exports: [CacheModule],
})
export class RedisModule {
  constructor() {
    logger.info(`REDIS Server Started on PORT ${process.env.REDIS_PORT}`);
  }
}
