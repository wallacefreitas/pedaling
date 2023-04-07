import { RemovePedalController } from "../../../../infra/http/controller/pedal/remove-pedal-controller"
import { InMemoryPedalsRepository } from "../../../../infra/repositories/in-memory/in-memory-pedals-repository"
import { PrismaPedalsRepository } from "../../../../infra/repositories/prisma/prisma-pedals-repository"
import { RemovePedal } from "./remove-pedal"

const inMemoryPedalsRepository = new InMemoryPedalsRepository()
const prismaPedalsRepository = new PrismaPedalsRepository()
const removePedal = new RemovePedal(prismaPedalsRepository)
const removePedalController = new RemovePedalController(removePedal)

export { removePedal, removePedalController }