import { Request, Response } from "express";
import { GetAllPedals } from "../../../application/use-cases/get-all-pedals/get-all-pedals"

export class GetAllPedalsController {
  constructor(
    private getAllPedalsUseCase: GetAllPedals
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const pedals = await this.getAllPedalsUseCase.execute()
      return response.status(200).json(pedals);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
    
  }
}