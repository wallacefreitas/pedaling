import { SavePedalController } from "../../../../infra/http/controller/pedal/save-pedal-controller"
import { InMemoryPedalsRepository } from "../../../../infra/repositories/in-memory/in-memory-pedals-repository"
import { PrismaPedalsRepository } from "../../../../infra/repositories/prisma/prisma-pedals-repository"
import { SavePedal } from "./save-pedal"

const inMemoryUsersRepository = new InMemoryPedalsRepository()
const prismaPedalsRepository = new PrismaPedalsRepository()
const savePedal = new SavePedal(prismaPedalsRepository)
const savePedalController = new SavePedalController(savePedal)

export { savePedal, savePedalController }