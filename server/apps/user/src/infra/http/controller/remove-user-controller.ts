import { Request, Response } from "express";
import { RemoveUser } from "../../../application/use-cases/remove-user/remove-user";

export class RemoveUserController {
  constructor(
    private removeUserUseCase: RemoveUser
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    try {
      await this.removeUserUseCase.execute(id)
      
      return response.status(200).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}