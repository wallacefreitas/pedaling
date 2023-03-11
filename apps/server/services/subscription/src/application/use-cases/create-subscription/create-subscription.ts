import { Subscription } from '../../entities/subscription'
import { SubscriptionsRepository } from '../../repositories/subscriptions-repository'

interface CreateSubscriptionRequest {
  userId: string
  rideId: string
  subscriptionDate: Date
}

type CreateSubscriptionResponse = Subscription

export class CreateSubscription {
  constructor(
    private subscriptionsRepository: SubscriptionsRepository
  ){}

  async execute({
    userId,
    rideId,
    subscriptionDate
  }: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse>{
    const subscription = new Subscription({
      userId,
      rideId,
      subscriptionDate
    })

    await this.subscriptionsRepository.create(subscription)

    return subscription
  }
}