import { describe, expect, it } from "vitest";
import { Subscription } from "../../entities/subscription";
import { InMemorySubscriptionsRepository } from "../../../infra/repositories/in-memory/in-memory-subscriptions-repository";
import { CreateSubscription } from "./create-subscription";

describe('Create an Subscription', () => {
  it('should be able to create an subscription', () => {
    const subscriptionsRepository = new InMemorySubscriptionsRepository()
    const createSubscription = new CreateSubscription(
      subscriptionsRepository
    )

    expect(createSubscription.execute({
      userId: '',
      rideId: '',
      subscriptionDate: new Date()
    })).resolves.toBeInstanceOf(Subscription)
  })
})