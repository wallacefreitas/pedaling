import { Request, Response } from "express";
import { GetUniquePedal } from "../../../application/use-cases/get-unique-pedal/get-unique-pedal"

export class GetUniquePedalController {
  constructor(
    private getUniquePedalUseCase: GetUniquePedal
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    try {
      const pedal = await this.getUniquePedalUseCase.execute(id)
      return response.status(200).json(pedal);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
    
  }
}