import { describe, expect, it } from "vitest";
import { Subscription } from "../../../entities/subscription";
import { InMemorySubscriptionsRepository } from "../../../../infra/repositories/in-memory/in-memory-subscriptions-repository";
import { GetSubscriptionsPerPedal } from "./get-subscriptions-per-pedal";
import { CreateSubscription } from "../create-subscription/create-subscription";

describe('List all Subscriptions per Pedal', () => {
  it('should be able to get all subscriptions per pedal', () => {
    const subscriptionsRepository = new InMemorySubscriptionsRepository()
    const createSubscription = new CreateSubscription(
      subscriptionsRepository
    )

    const getSubscriptionsPerPedal = new GetSubscriptionsPerPedal(
      subscriptionsRepository
    )

    createSubscription.execute({
      userId: '123456',
      rideId: '123',
      subscriptionDate: new Date()
    })

    const subscriptionsPerPedal = getSubscriptionsPerPedal.execute('123456')

    expect(subscriptionsPerPedal).resolves.toBeInstanceOf(Subscription)
  })
})