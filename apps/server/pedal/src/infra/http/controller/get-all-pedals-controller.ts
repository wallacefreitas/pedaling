import { Request, Response } from "express";
import { GetAllPedals } from "../../../application/use-cases/get-all-pedals/get-all-pedals"

export class GetAllPedalsController {
  constructor(
    private getAllPedalsUseCase: GetAllPedals
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body

    try {
      const users = await this.getAllPedalsUseCase.execute()
      return response.status(200).json(users);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
    
  }
}