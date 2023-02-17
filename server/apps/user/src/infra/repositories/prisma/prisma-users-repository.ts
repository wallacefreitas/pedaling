import { PrismaClient } from "@prisma/client";
import { User } from "../../../application/entities/user";
import { UserRepository } from "../../../application/repositories/users-repository";

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
        createdAt: new Date()
      }
    });
  }

  async save(user: User): Promise<void> {
    await this.prisma.user.update({
      data: {
        name: user.name,
        email: user.email
      },
      where: {
        id: user.id
      }
    })
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