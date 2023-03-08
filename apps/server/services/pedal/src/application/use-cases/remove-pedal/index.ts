import { RemovePedalController } from "../../../infra/http/controller/remove-pedal-controller"
import { InMemoryPedalsRepository } from "../../../infra/repositories/in-memory/in-memory-pedals-repository"
import { RemovePedal } from "./remove-pedal"

const inMemoryPedalsRepository = new InMemoryPedalsRepository()
const removePedal = new RemovePedal(inMemoryPedalsRepository)
const removePedalController = new RemovePedalController(removePedal)

export { removePedal, removePedalController }