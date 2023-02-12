import { User } from "../entities/user";
import { PrismaUsersRepository } from "../repositories/prisma/prisma-users-repository";
import { UsersRepository } from "../repositories/users-repository";

type FindAllUsersResponse = User[]

export class FindAllUsers {
  constructor(private prismaUsersRepository: PrismaUsersRepository) {}

  async execute(): Promise<FindAllUsersResponse> {
    return await this.prismaUsersRepository.findAll()
  }
}