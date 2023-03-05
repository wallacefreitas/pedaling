import { SavePedalController } from "../../../infra/http/controller/save-pedal-controller"
import { InMemoryPedalsRepository } from "../../../infra/repositories/in-memory/in-memory-pedals-repository"
// import { PrismaUsersRepository } from "../../../infra/repositories/prisma/prisma-users-repository"
import { SavePedal } from "./save-pedal"

const inMemoryUsersRepository = new InMemoryPedalsRepository()
//  const prismaUsersRepository = new PrismaUsersRepository() TODO: UNCOMMENTED MAKE A CHANGE TO PRISMA
const savePedal = new SavePedal(inMemoryUsersRepository)
const savePedalController = new SavePedalController(savePedal)

export { savePedal, savePedalController }