import { CreateUserController } from "../../../infra/http/controller/create-user-controller"
import { InMemoryUsersRepository } from "../../../infra/repositories/in-memory/in-memory-users-repository"
// import { PrismaUsersRepository } from "../../../infra/repositories/prisma/prisma-users-repository"
import { CreateUser } from "./create-user"

const inMemoryUsersRepository = new InMemoryUsersRepository()
//  const prismaUsersRepository = new PrismaUsersRepository() TODO: UNCOMMENTED MAKE A CHANGE TO PRISMA
const createUser = new CreateUser(inMemoryUsersRepository)
const createUserController = new CreateUserController(createUser)

export { createUser, createUserController }