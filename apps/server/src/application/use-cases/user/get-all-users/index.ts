import { GetAllUsersController } from "../../../../infra/http/controller/user/get-all-users-controller"
import { InMemoryUsersRepository } from "../../../../infra/repositories/in-memory/in-memory-users-repository"
import { PrismaUsersRepository } from "../../../../infra/repositories/prisma/prisma-users-repository"
import { GetAllUsers } from "./get-all-users"

const inMemoryUsersRepository = new InMemoryUsersRepository()
const prismaUsersRepository = new PrismaUsersRepository()
const getAllUsers = new GetAllUsers(prismaUsersRepository)
const getAllUsersController = new GetAllUsersController(getAllUsers)

export { getAllUsers, getAllUsersController }