import { Subscription } from "../../../application/entities/subscription";
import { SubscriptionsRepository } from "../../../application/repositories/subscriptions-repository";

export class InMemorySubscriptionsRepository implements SubscriptionsRepository {
  public subscriptions: Subscription[] = []

  async create(subscription: Subscription): Promise<void> {
    this.subscriptions.push(subscription) 
  }
}