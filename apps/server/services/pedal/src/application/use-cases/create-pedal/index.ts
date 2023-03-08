import { CreatePedalController } from "../../../infra/http/controller/create-pedal-controller"
import { InMemoryPedalsRepository } from "../../../infra/repositories/in-memory/in-memory-pedals-repository"
import { CreatePedal } from "./create-pedal"

const inMemoryPedalsRepository = new InMemoryPedalsRepository()
const createPedal = new CreatePedal(inMemoryPedalsRepository)
const createPedalController = new CreatePedalController(createPedal)

export { createPedal, createPedalController }