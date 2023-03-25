import { createClient } from 'redis'

export class RedisService {
  private redisClient;

  constructor() {
    this.redisClient = createClient()
    this.redisClient.on('connect', () => {
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