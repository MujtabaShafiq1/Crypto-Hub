import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getValue(username: string, key: string) {
    console.log(`Getting ${key} from redis store`);
    this.allKeys();
    return await this.cacheManager.get(key);
  }

  async setValue(username: string, key: string, value: any): Promise<void> {
    const data = { [key]: value };
    console.log(`Setting ${data} in redis store`);
    await this.cacheManager.set(username, data);
  }

  async delValue(username: string): Promise<void> {
    await this.cacheManager.del(username);
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
