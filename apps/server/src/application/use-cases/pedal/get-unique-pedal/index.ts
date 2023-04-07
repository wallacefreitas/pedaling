import { GetUniquePedalController } from "../../../../infra/http/controller/pedal/get-unique-pedal-controller"
import { InMemoryPedalsRepository } from "../../../../infra/repositories/in-memory/in-memory-pedals-repository"
import { PrismaPedalsRepository } from "../../../../infra/repositories/prisma/prisma-pedals-repository"
import { GetUniquePedal } from "./get-unique-pedal"

const inMemoryPedalsRepository = new InMemoryPedalsRepository()
const prismaPedalsRepository = new PrismaPedalsRepository()
const getUniquePedal = new GetUniquePedal(prismaPedalsRepository)
const getAllPedalsController = new GetUniquePedalController(getUniquePedal)

export { getUniquePedal, getAllPedalsController }