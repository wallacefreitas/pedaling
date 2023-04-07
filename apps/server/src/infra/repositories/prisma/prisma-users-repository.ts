import { PrismaClient } from "@prisma/client";
import { UserProps } from "../../../application/entities/user";
import { UsersRepository } from "../../../application/repositories/users-repository";

type User = UserProps

export class PrismaUsersRepository implements UsersRepository {
  constructor(
    private prisma = new PrismaClient(),
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

  async remove(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id
      }
    })
  }

  async findUnique(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }

  async findMany(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        email
      }
    })
  }
}