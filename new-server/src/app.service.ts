import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getHello(): Promise<string> {
    await this.cacheManager.set('cached_item', { key: 32 });
    await this.cacheManager.del('cached_item');
    await this.cacheManager.reset();

    const keys = await this.cacheManager.store.keys();
    const allData: { [key: string]: any } = {};
    for (const key of keys) {
      allData[key] = await this.cacheManager.get(key);
    }
    console.log(allData);

    return 'Hello World!';
  }
}
