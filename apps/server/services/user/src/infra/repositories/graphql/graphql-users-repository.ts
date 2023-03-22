import { PrismaClient } from "@prisma/client";
import { Arg, Query, Resolver } from "type-graphql";
import { UserProps as User } from "../../../application/entities/user";
import { UserModel } from "../../../application/model/user";
import { UsersRepository } from "../../../application/repositories/users-repository";

@Resolver(UserModel)
export class GraphQLUsersRepository implements UsersRepository {
  constructor(
    private prisma = new PrismaClient()
  ){}

  @Query(returns => [UserModel])
  async findMany() {
    return await this.prisma.user.findMany()
  }

  async remove(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id
      }
    })
  }

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
        email: user.email,
        name: user.name
      },
      where: {
        id: user.id
      }
    })
  }

  @Query(returns => UserModel, { name: 'findByEmail', nullable: true })
  async findByEmail(@Arg("email") email: string): Promise<User | null>  {
    return await this.prisma.user.findUnique({
      where: {
        email
      }
    })
  }

  @Query(returns => UserModel, { name: 'findUnique', nullable: true })
  async findUnique(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }
}