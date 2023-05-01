import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getValue(username: string, key: string) {
    const value: string = await this.cacheManager.get(username);
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
}
