import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import { RedisCacheService } from './redis.service';

@Module({
  imports: [
    CacheModule.registerAsync<any>({
      isGlobal: true,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const store = await redisStore({
          socket: {
            host: configService.get('REDIS_HOST'),
            port: configService.get('REDIS_PORT'),
          },
          ttl: 600,
        });
        return {
          store: () => store,
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [RedisCacheService],
  exports: [CacheModule],
})
export class RedisModule {}
