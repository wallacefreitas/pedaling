import { Request, Response } from "express";
import { CreateSubscription } from "../../../../application/use-cases/subscription/create-subscription/create-subscription";

export class CreateSubscriptionController {
  constructor(
    private createSubscriptionUseCase: CreateSubscription
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { 
      userId,
      rideId,
      subscriptionDate
    } = request.body

    try {
      await this.createSubscriptionUseCase.execute({
        userId,
        rideId,
        subscriptionDate
      })

      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
    
  }
}
