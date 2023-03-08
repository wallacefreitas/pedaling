import { Request, Response } from "express";
import { SaveUser } from "../../../application/use-cases/save-user/save-user";

export class SaveUserController {
  constructor(
    private saveUserUseCase: SaveUser
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const { name, email } = request.body

    try {
      await this.saveUserUseCase.execute({
        id,
        name,
        email
      })

      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
    
  }
}