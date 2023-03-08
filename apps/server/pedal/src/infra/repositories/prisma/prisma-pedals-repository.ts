import { PrismaClient } from "@prisma/client";
import { Pedal } from "../../../application/entities/pedal";
import { PedalsRepository } from "../../../application/repositories/pedals-repository";

export class PrismaPedalsRepository implements PedalsRepository {
  constructor(
    private prisma = new PrismaClient()
  ){}

  async create(pedal: Pedal): Promise<void> {
    await this.prisma.pedal.create({
      data: {
        id: pedal.id,
        name: pedal.name,
        startDate: pedal.startDate,
        startDateRegistration: pedal.startDateRegistration,
        endDateRegistration: pedal.endDateRegistration,
        additionalInformation: pedal.additionalInformation,
        startPlace: pedal.startPlace,
        participantsLimit: pedal.participantsLimit
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
        additionalInformation: pedal.additionalInformation,
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
    return await this.prisma.pedal.findMany()
  }
}