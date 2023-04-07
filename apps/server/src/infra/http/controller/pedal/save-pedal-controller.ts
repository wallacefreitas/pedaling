import { Request, Response } from "express";
import { SavePedal} from "../../../../application/use-cases/pedal/save-pedal/save-pedal";

export class SavePedalController {
  constructor(
    private savePedalUseCase: SavePedal
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id
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
      await this.savePedalUseCase.execute({
        id,
        name, 
        startDate, 
        startDateRegistration, 
        endDateRegistration, 
        additionalInformation, 
        startPlace, 
        participantsLimit  
      })
      
      return response.status(200).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}