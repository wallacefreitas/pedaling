import { UsersRepository } from "../../repositories/users-repository";

export class RemoveUser {
  constructor(
    private usersRepository: UsersRepository
  ){}

  async execute(id: string): Promise<void> {
    const user = await this.usersRepository.findUnique(id);

    if (!user) {
      throw new Error('User does not exist')
    }

    return await this.usersRepository.remove(id)
  }
}