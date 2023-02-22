import { UserProps } from "../../entities/user";
import { UserRepository } from "../../repositories/users-repository";

type GetAllUsersResponse = UserProps[]

export class GetAllUsers {
  constructor(
    private usersRepository: UserRepository
  ){}

  async execute(): Promise<GetAllUsersResponse> {
    return await this.usersRepository.findMany()
  }
}