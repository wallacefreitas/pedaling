import { Subscription } from "../entities/subscription";

interface UsersPerPedal {
  id: string
}

export interface SubscriptionPerPedal {
  pedalId: string,
  users: UsersPerPedal[]
}

export interface SubscriptionsRepository {
  create(pedal: Subscription): Promise<void>;
  getSubscriptionsPerPedal(pedalId: string): Promise<SubscriptionPerPedal>;
}