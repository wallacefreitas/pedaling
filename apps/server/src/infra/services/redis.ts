import { createClient, RedisClientType } from 'redis'

export class RedisService {
  private redisClient: RedisClientType;

  constructor() {
    this.init()
  }

  async init() {
    this.redisClient = createClient({
      url: process.env.REDIS_URL,
      password: process.env.REDIS_PASSWORD,
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