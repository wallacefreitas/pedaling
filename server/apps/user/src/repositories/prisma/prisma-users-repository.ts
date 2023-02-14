import { PrismaClient } from "@prisma/client";
import { User } from "../../entities/user";
import { UserRepository } from "../users-repository";

export class PrismaUsersRepository implements UserRepository {
  public users: User[] = []

  constructor(
    private prisma = new PrismaClient()
  ){}

  async create(user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: user!.id,
        name: user!.name,
        email: user!.email,
        createdAt: user!.createdAt
      }
    });
  }
  
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      }
    })

    if (user) {
      return new User(user)
    }

    return null
  }
}