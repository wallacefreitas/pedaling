import { User } from "../../entities/user";
import { UserRepository } from "../../repositories/users-repository";

type GetAllUsersResponse = User[]

export class GetAllUsers {
  constructor(
    private usersRepository: UserRepository
  ){}

  async execute(): Promise<GetAllUsersResponse> {
    return await this.usersRepository.findMany()
  }
}