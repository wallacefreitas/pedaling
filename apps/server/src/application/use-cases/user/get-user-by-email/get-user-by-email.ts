import { UserProps as User } from "../../../entities/user";
import { UsersRepository } from "../../../repositories/users-repository";

type GetUserByEmailResponse = User | null

export class GetUserByEmail {
  constructor(
    private usersRepository: UsersRepository
  ){}

  async execute(email: string): Promise<GetUserByEmailResponse> {
    return await this.usersRepository.findByEmail(email)
  }
}