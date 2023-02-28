import { Request, Response } from "express";
import { CreatePedal } from "../../../application/use-cases/create-pedal/create-pedal";

export class CreatePedalController {
  constructor(
    private createPedalUseCase: CreatePedal
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { 
      name, 
      startDate, 
      startDateRegistration, 
      endDateRegistration,
      additionalInformation,
      startPlace,
      participantsLimit
    } = request.body

    try {
      await this.createPedalUseCase.execute({
        name, 
        startDate, 
        startDateRegistration, 
        endDateRegistration,
        additionalInformation,
        startPlace,
        participantsLimit
      })

      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
    
  }
}
