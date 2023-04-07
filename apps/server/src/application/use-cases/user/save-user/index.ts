import { SaveUserController } from "../../../../infra/http/controller/user/save-user-controller"
import { InMemoryUsersRepository } from "../../../../infra/repositories/in-memory/in-memory-users-repository"
import { PrismaUsersRepository } from "../../../../infra/repositories/prisma/prisma-users-repository"
import { SaveUser } from "./save-user"

const inMemoryUsersRepository = new InMemoryUsersRepository()
const prismaUsersRepository = new PrismaUsersRepository()
const saveUser = new SaveUser(prismaUsersRepository)
const saveUserController = new SaveUserController(saveUser)

export { saveUser, saveUserController }