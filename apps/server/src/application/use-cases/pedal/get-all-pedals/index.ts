import { GetAllPedalsController } from "../../../../infra/http/controller/pedal/get-all-pedals-controller"
import { InMemoryPedalsRepository } from "../../../../infra/repositories/in-memory/in-memory-pedals-repository"
import { PrismaPedalsRepository } from "../../../../infra/repositories/prisma/prisma-pedals-repository"
import { GetAllPedals } from "./get-all-pedals"

const inMemoryPedalsRepository = new InMemoryPedalsRepository()
const prismaPedalsRepository = new PrismaPedalsRepository()
const getAllPedals = new GetAllPedals(prismaPedalsRepository)
const getAllPedalsController = new GetAllPedalsController(getAllPedals)

export { getAllPedals, getAllPedalsController }