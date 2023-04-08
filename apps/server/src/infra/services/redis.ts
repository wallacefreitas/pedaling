import { env } from 'process';
import { createClient, RedisClientType } from 'redis'

export class RedisService {
  private redisClient: RedisClientType;

  constructor() {
    this.init()
  }

  async init() {
    this.redisClient = createClient({
      url: env.REDIS_URL,
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