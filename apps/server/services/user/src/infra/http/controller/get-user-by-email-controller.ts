import { Request, Response } from "express";
import { GetUserByEmail } from "../../../application/use-cases/get-user-by-email/get-user-by-email";

export class GetUserByEmailController {
  constructor(
    private getUserByEmailUseCase: GetUserByEmail
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    try {
      const users = await this.getUserByEmailUseCase.execute(email)
      return response.status(200).json(users);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
    
  }
}