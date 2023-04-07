import { CreatePedalController } from "../../../../infra/http/controller/pedal/create-pedal-controller"
import { InMemoryPedalsRepository } from "../../../../infra/repositories/in-memory/in-memory-pedals-repository"
import { PrismaPedalsRepository } from "../../../../infra/repositories/prisma/prisma-pedals-repository"
import { CreatePedal } from "./create-pedal"

const inMemoryPedalsRepository = new InMemoryPedalsRepository()
const prismaPedalsRepository = new PrismaPedalsRepository()
const createPedal = new CreatePedal(prismaPedalsRepository)
const createPedalController = new CreatePedalController(createPedal)

export { createPedal, createPedalController }