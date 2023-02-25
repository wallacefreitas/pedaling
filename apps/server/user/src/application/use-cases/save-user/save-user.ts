import { User } from "../../entities/user";
import { UserRepository } from "../../repositories/users-repository";

interface SaveUserRequest {
  id: string;
  name: string;
  email: string;
}

type SaveUserResponse = User

export class SaveUser {
  constructor(
    private usersRepository: UserRepository
  ){}

  async execute({ id, name, email }: SaveUserRequest): Promise<SaveUserResponse> {
    const userAlreadyExists = await this.usersRepository.findUnique(id);

    if (!userAlreadyExists) {
      throw new Error('User not exists')
    }

    const user = new User({
      id,
      name,
      email
    })

    await this.usersRepository.save(user)

    return user
  }
}