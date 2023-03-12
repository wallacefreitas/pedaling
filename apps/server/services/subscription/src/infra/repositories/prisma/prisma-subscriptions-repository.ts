import { PrismaClient } from "@prisma/client";
import { Subscription } from "../../../application/entities/subscription";
import { SubscriptionsRepository } from "../../../application/repositories/subscriptions-repository";

export class PrismaSubscriptonsRepository implements SubscriptionsRepository {
  constructor(
    private prisma = new PrismaClient({
      datasources: {
        db: {
          url: "postgres://localhost/pedaling_user_db"
        }
      }
    })
  ){}

  async create(subscription: Subscription): Promise<void> {
    // await this.prisma.subscription.create({
    //   data: {
    //     userId: subscription.userId,
    //     rideId: subscription.rideId,
    //     subscriptionDate: subscription.subscriptionDate
    //   }
    // });
  }
}