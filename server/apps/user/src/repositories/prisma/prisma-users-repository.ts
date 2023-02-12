import { PrismaClient } from "@prisma/client";
import { User } from "../../entities/user";
import { UsersRepository } from "../users-repository";

export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma = new PrismaClient()){}

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany()
    return []
  }
}