import { GetUserByEmailController } from "../../../../infra/http/controller/user/get-user-by-email-controller"
import { InMemoryUsersRepository } from "../../../../infra/repositories/in-memory/in-memory-users-repository"
import { PrismaUsersRepository } from "../../../../infra/repositories/prisma/prisma-users-repository"
import { GetUserByEmail } from "./get-user-by-email"

const inMemoryUsersRepository = new InMemoryUsersRepository()
const prismaUsersRepository = new PrismaUsersRepository()
const getUserByEmail = new GetUserByEmail(prismaUsersRepository)
const getUserByEmailController = new GetUserByEmailController(getUserByEmail)

export { getUserByEmail, getUserByEmailController }