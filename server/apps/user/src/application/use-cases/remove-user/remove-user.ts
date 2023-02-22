import { UserRepository } from "../../repositories/users-repository";

export class RemoveUser {
  constructor(
    private usersRepository: UserRepository
  ){}

  async execute(id: string): Promise<void> {
    return await this.usersRepository.remove(id)
  }
}