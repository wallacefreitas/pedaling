import { User } from "../../entities/user";
import { UsersRepository } from "../../repositories/users-repository";

interface CreateUserRequest {
  name: string;
  email: string;
}

type CreateUserResponse = User

export class CreateUser {
  constructor(
    private usersRepository: UsersRepository
  ){}

  async execute({ name, email }: CreateUserRequest): Promise<CreateUserResponse> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = new User({
      name,
      email
    })

    await this.usersRepository.create(user)

    return user
  }
}