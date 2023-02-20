import { User } from "../../entities/user";
import { UserRepository } from "../../repositories/users-repository";

interface SaveUserRequest {
  name: string;
  email: string;
}

type SaveUserResponse = User

export class SaveUser {
  constructor(
    private usersRepository: UserRepository
  ){}

  async execute({ name, email }: SaveUserRequest): Promise<SaveUserResponse> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (!userAlreadyExists) {
      throw new Error('User not exists')
    }

    const user = new User({
      name,
      email
    })

    await this.usersRepository.save(user)

    return user
  }
}