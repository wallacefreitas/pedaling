import { GetUniquePedalController } from "../../../infra/http/controller/get-unique-pedal-controller"
import { InMemoryPedalsRepository } from "../../../infra/repositories/in-memory/in-memory-pedals-repository"
import { GetUniquePedal } from "./get-unique-pedal"

const inMemoryPedalsRepository = new InMemoryPedalsRepository()
const getUniquePedal = new GetUniquePedal(inMemoryPedalsRepository)
const getAllPedalsController = new GetUniquePedalController(getUniquePedal)

export { getUniquePedal, getAllPedalsController }