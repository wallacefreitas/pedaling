import { PrismaClient } from "@prisma/client";
import { Query, Resolver } from "type-graphql";
import { PedalProps as Pedal } from "../../../application/entities/pedal";
import { PedalModel } from "../../../application/model/pedal";
import { PedalsRepository } from "../../../application/repositories/pedals-repository";
import { RedisService } from "../../services/redis";

@Resolver(PedalModel)
export class GraphQLPedalsRepository implements PedalsRepository {
  constructor(
    private prisma = new PrismaClient(),
    private redisClient = new RedisService()
  ){}

  create(pedal: Pedal): Promise<void> {
    throw new Error("Method not implemented.");
  }

  save(pedal: Pedal): Promise<void> {
    throw new Error("Method not implemented.");
  }

  remove(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  @Query(returns => PedalModel)
  async findUnique(id: string): Promise<Pedal | null> {
    return await this.prisma.pedal.findUnique({
      where: {
        id
      }
    })
  }

  @Query(returns => [PedalModel])
  async findMany(): Promise<Pedal[]> {
    const pedalsRedis = await this.redisClient.getValue('pedals') || ''
  
    if (pedalsRedis) return JSON.parse(pedalsRedis);

    const pedals = await this.prisma.pedal.findMany()
    this.redisClient.setValue('pedals', JSON.stringify(pedals))

    return pedals
  }

}