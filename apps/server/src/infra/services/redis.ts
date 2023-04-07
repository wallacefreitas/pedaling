import RedisClient from '@redis/client/dist/lib/client';
import { createClient, RedisClientType } from 'redis'

export class RedisService {
  private redisClient: RedisClientType;

  constructor() {
    this.init()
  }

  async init() {
    this.redisClient = createClient({
      url: 'redis://:eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81@localhost:6379',
    })
    
    await this.redisClient.connect();
    await this.redisClient.on('connect', () => {
      console.log('connected')
    })
  }

  async setValue(key: string, value: string) {
    await this.redisClient.set(key, value)
  }

  async getValue(key: string) {
    return await this.redisClient.get(key)
  }
}