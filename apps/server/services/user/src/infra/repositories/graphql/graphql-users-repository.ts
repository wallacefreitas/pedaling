import { PrismaClient } from "@prisma/client";
import { Query, Resolver } from "type-graphql";
import { UserProps } from "../../../application/entities/user";
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
    
  }

  async create(user: UserProps): Promise<void> {
    
  }

  async save(user: UserProps): Promise<void> {
    
  }

  async findByEmail(email: string): Promise<UserProps | null> {
    return null
  }

  async findUnique(id: string): Promise<UserProps | null> {
    return null
  }
}