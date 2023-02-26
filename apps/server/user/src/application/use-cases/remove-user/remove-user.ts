import { UserProps } from "../../entities/user";
import { UsersRepository } from "../../repositories/users-repository";

type User = UserProps

export class RemoveUser {
  constructor(
    private usersRepository: UsersRepository
  ){}

  async execute(id: string): Promise<User[]> {
    const user = await this.usersRepository.findUnique(id);

    if (!user) {
      throw new Error('User does not exist')
    }

    return await this.usersRepository.remove(id)
  }
}