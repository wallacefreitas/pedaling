import { Subscription } from "../entities/subscription";

export interface SubscriptionsRepository {
  create(pedal: Subscription): Promise<void>;
}