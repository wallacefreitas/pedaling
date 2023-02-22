import { RemoveUserController } from "../../../infra/http/controller/remove-user-controller"
import { InMemoryUsersRepository } from "../../../infra/repositories/in-memory/in-memory-users-repository"
// import { PrismaUsersRepository } from "../../../infra/repositories/prisma/prisma-users-repository"
import { RemoveUser } from "./remove-user"

const inMemoryUsersRepository = new InMemoryUsersRepository()
//  const prismaUsersRepository = new PrismaUsersRepository() TODO: UNCOMMENTED MAKE A CHANGE TO PRISMA
const removeUser = new RemoveUser(inMemoryUsersRepository)
const removeUserController = new RemoveUserController(removeUser)

export { removeUser, removeUserController }