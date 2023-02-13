import { User } from "../entities/user";

interface CreateUserRequest {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

type CreateUserResponse = User

export class CreateUser {
  async execute({ id, name, email, createdAt }: CreateUserRequest): Promise<CreateUserResponse> {
    const user = new User({
      id,
      name,
      email,
      createdAt
    })

    return user
  }
}