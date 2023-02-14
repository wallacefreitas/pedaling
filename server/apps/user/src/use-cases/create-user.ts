import { User } from "../entities/user";
import { UserRepository } from "../repositories/users-repository";

interface CreateUserRequest {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

type CreateUserResponse = User

export class CreateUser {
  constructor(
    private usersRepository: UserRepository
  ){}

  async execute({ id, name, email, createdAt }: CreateUserRequest): Promise<CreateUserResponse> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists !== null) {
      throw new Error('Another user this email')
    }

    const user = new User({
      id,
      name,
      email,
      createdAt
    })

    await this.usersRepository.create(user)

    return user
  }
}