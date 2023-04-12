import { SubscriptionProps as Subscription } from "../../../application/entities/subscription";
import { SubscriptionPerPedal, SubscriptionsRepository } from "../../../application/repositories/subscriptions-repository";
import { InMemoryPedalsRepository } from "./in-memory-pedals-repository"

export class InMemorySubscriptionsRepository implements SubscriptionsRepository {
  public subscriptions: Subscription[] = []

  async create(subscription: Subscription): Promise<void> {
    this.subscriptions.push(subscription) 
  }

  async getSubscriptionsPerPedal(pedalId: string): Promise<SubscriptionPerPedal> {
    const subscriptionsPerPedal = this.subscriptions.filter(subscription => subscription.rideId === pedalId);

    if (subscriptionsPerPedal.length === 0) {
      return {
        pedalId: "",
        users: []
      }
    }

    const inMemoryPedalsRepository = new InMemoryPedalsRepository()
    const pedal = await inMemoryPedalsRepository.findUnique(pedalId)
    const users: any[] = []
    
    return {
      pedalId,
      users
    }
  }
}