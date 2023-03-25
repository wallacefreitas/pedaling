import { PrismaClient } from "@prisma/client";
import { PedalProps } from "../../../application/entities/pedal";
import { PedalsRepository } from "../../../application/repositories/pedals-repository";
import { RedisService } from "../../services/redis";

type Pedal = PedalProps

export class PrismaPedalsRepository implements PedalsRepository {
  constructor(
    private prisma = new PrismaClient(),
    private redisClient = new RedisService()
  ){}

  async create(pedal: Pedal): Promise<void> {
    await this.prisma.pedal.create({
      data: {
        id: pedal.id,
        name: pedal.name,
        startDate: pedal.startDate,
        startDateRegistration: pedal.startDateRegistration,
        endDateRegistration: pedal.endDateRegistration,
        additionalInformation: pedal.additionalInformation || '',
        startPlace: pedal.startPlace,
        participantsLimit: pedal.participantsLimit || 0
      }
    });
  }

  async save(pedal: Pedal): Promise<void> {
    await this.prisma.pedal.update({
      data: {
        name: pedal.name,
        startDate: pedal.startDate,
        startDateRegistration: pedal.startDateRegistration,
        endDateRegistration: pedal.endDateRegistration,
        additionalInformation: pedal.additionalInformation || '',
        startPlace: pedal.startPlace,
        participantsLimit: pedal.participantsLimit
      },
      where: {
        id: pedal.id
      }
    })
  }

  async remove(id: string): Promise<void> {
    await this.prisma.pedal.delete({
      where: {
        id
      }
    })
  }

  async findUnique(id: string): Promise<Pedal | null> {
    return await this.prisma.pedal.findUnique({
      where: {
        id
      }
    })
  }

  async findMany(): Promise<Pedal[]> {
    const pedalsRedis = await this.redisClient.getValue('pedals') || ''
  
    if (pedalsRedis) return JSON.parse(pedalsRedis);

    const pedals = await this.prisma.pedal.findMany()
    this.redisClient.setValue('pedals', JSON.stringify(pedals))

    return pedals
  }
}