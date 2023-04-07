import { Request, Response } from "express";
import { RemovePedal} from "../../../../application/use-cases/pedal/remove-pedal/remove-pedal";

export class RemovePedalController {
  constructor(
    private removePedalUseCase: RemovePedal
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    try {
      await this.removePedalUseCase.execute(id)
      
      return response.status(200).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}