import { GetAllPedalsController } from "../../../infra/http/controller/get-all-pedals-controller"
import { InMemoryPedalsRepository } from "../../../infra/repositories/in-memory/in-memory-pedals-repository"
import { GetAllPedals } from "./get-all-pedals"

const inMemoryPedalsRepository = new InMemoryPedalsRepository()
const getAllPedals = new GetAllPedals(inMemoryPedalsRepository)
const getAllPedalsController = new GetAllPedalsController(getAllPedals)

export { getAllPedals, getAllPedalsController }