import { Request, Response } from "express";
import { GetSubscriptionsPerPedal } from "../../../../application/use-cases/subscription/get-subscriptions-per-pedal/get-subscriptions-per-pedal"

export class GetSubscriptionsPerPedalController {
  constructor(
    private getSubscriptionsPerPedalUseCase: GetSubscriptionsPerPedal
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { pedalId } = request.params

    try {
      const pedal = await this.getSubscriptionsPerPedalUseCase.execute(pedalId)
      return response.status(200).json(pedal);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}