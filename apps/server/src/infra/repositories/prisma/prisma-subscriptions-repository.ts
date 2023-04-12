import { PrismaClient } from "@prisma/client";
import { Subscription } from "../../../application/entities/subscription";
import { SubscriptionPerPedal, SubscriptionsRepository } from "../../../application/repositories/subscriptions-repository";
import { PrismaPedalsRepository } from "./prisma-pedals-repository"

export class PrismaSubscriptonsRepository implements SubscriptionsRepository {
  constructor(
    private prisma = new PrismaClient(),
    private prismaPedalsRepository = new PrismaPedalsRepository()
  ){}

  async create(subscription: Subscription): Promise<void> {
    const pedal = await this.prismaPedalsRepository.findUnique(subscription.rideId);
    const participantsLimit = pedal?.participantsLimit || 0
    const subscriptionsPerPedal = await this.getSubscriptionsPerPedal(subscription.rideId)
    const participantsPerPedal = subscriptionsPerPedal.users.length || 0

    if (participantsPerPedal < participantsLimit) {
      await this.prisma.subscription.create({
        data: {
          userId: subscription.userId,
          rideId: subscription.rideId,
          subscriptionDate: new Date(subscription.subscriptionDate)
        }
      });
    } else {
      throw new Error("Participants limit exceed")
    }
  }

  async getSubscriptionsPerPedal(pedalId: string): Promise<SubscriptionPerPedal> {
    const pedal = await this.prismaPedalsRepository.findUnique(pedalId);

    if (!pedal)
      throw new Error("Pedal " + pedalId + " not found")

    const subscritiponsPerPedal = await this.prisma.subscription.findMany({
      where: {
        rideId: pedalId
      }
    })
  
    const users = subscritiponsPerPedal
      .filter( subscriptionPerPedal => {
        return subscriptionPerPedal.rideId === pedalId
      })
      .map(subscription => {
        return { id: subscription.userId }
      })

    return Object.assign({}, {pedalId}, { users } )
  }
}