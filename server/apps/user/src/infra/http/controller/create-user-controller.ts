import { Request, Response } from "express";
import { CreateUser } from "../../../application/use-cases/create-user/create-user";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUser
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body

    try {
      await this.createUserUseCase.execute({
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