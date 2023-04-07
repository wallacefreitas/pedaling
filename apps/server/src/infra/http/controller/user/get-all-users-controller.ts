import { Request, Response } from "express";
import { GetAllUsers } from "../../../../application/use-cases/user/get-all-users/get-all-users";

export class GetAllUsersController {
  constructor(
    private getAllUsersUseCase: GetAllUsers
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.getAllUsersUseCase.execute()
      return response.status(200).json(users);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
    
  }
}