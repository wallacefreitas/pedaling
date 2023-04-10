import { SubscriptionPerPedal, SubscriptionsRepository } from "../../../repositories/subscriptions-repository";

type GetSubscriptionsPerPedalResponse = SubscriptionPerPedal

export class GetSubscriptionsPerPedal {
  constructor(
    private subscriptionsRepository: SubscriptionsRepository
  ){}

  async execute(pedalId: string): Promise<GetSubscriptionsPerPedalResponse> {
    return await this.subscriptionsRepository.getSubscriptionsPerPedal(pedalId);
  }
}