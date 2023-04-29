import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getValue(key: string) {
    console.log(`Getting ${key} from redis store`);
    return await this.cacheManager.get(key);
  }

  async setValue(key: string, value: any) {
    console.log(`Setting ${key} in redis store`);
    await this.cacheManager.set(key, value);
  }

  async delValue(key: any) {
    await this.cacheManager.del(key);
  }

  resetCache(): void {
    this.cacheManager.reset();
  }

  async allKeys() {
    const keys = await this.cacheManager.store.keys();
    const allData: { [key: string]: any } = {};
    for (const key of keys) {
      allData[key] = await this.cacheManager.get(key);
    }
    console.log(allData);
  }
}
