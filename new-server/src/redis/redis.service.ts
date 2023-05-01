import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getValue(username: string, key: string) {
    const value: string = await this.cacheManager.get(username);
    this.allKeys()
    if (!value) return null;
    const result = JSON.parse(value);
    return result[key];
  }

  async setValue(username: string, key: string, value: any): Promise<void> {
    const existingData: string = await this.cacheManager.get(username);
    let userData = {};
    if (existingData) userData = JSON.parse(existingData);
    userData[key] = value;
    await this.cacheManager.set(username, JSON.stringify(userData));
  }

  async delValue(username: string): Promise<void> {
    await this.cacheManager.del(username);
  }

  // remove later
  async allKeys() {
    const keys = await this.cacheManager.store.keys();
    const allData: { [key: string]: any } = {};
    for (const key of keys) {
      allData[key] = await this.cacheManager.get(key);
    }
    console.log(allData);
  }

  async getCachedValue(
    username: string,
    key: string,
    fetchValue: () => Promise<any>,
  ): Promise<any> {
    let value = await this.getValue(username, key);
    if (!value) {
      value = await fetchValue();
      await this.setValue(username, key, value);
      console.log('Setting value in the cache');
    }
    return value;
  }
}
