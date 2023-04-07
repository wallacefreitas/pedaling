import { UserProps } from "../../../entities/user";
import { UsersRepository } from "../../../repositories/users-repository";

type GetAllUsersResponse = UserProps[]

export class GetAllUsers {
  constructor(
    private usersRepository: UsersRepository
  ){}

  async execute(): Promise<GetAllUsersResponse> {
    return await this.usersRepository.findMany()
  }
}