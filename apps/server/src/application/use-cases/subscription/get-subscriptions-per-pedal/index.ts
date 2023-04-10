import { GetSubscriptionsPerPedalController } from "../../../../infra/http/controller/subscription/get-subscriptions-per-pedal"
import { InMemorySubscriptionsRepository } from "../../../../infra/repositories/in-memory/in-memory-subscriptions-repository"
import { PrismaSubscriptonsRepository } from "../../../../infra/repositories/prisma/prisma-subscriptions-repository"
import { GetSubscriptionsPerPedal } from "./get-subscriptions-per-pedal"

const inMemoryPedalsRepository = new InMemorySubscriptionsRepository()
const prismaPedalsRepository = new PrismaSubscriptonsRepository()
const getSubscriptionsPerPedal = new GetSubscriptionsPerPedal(prismaPedalsRepository)
const getSubscriptionsPerPedalController = new GetSubscriptionsPerPedalController(getSubscriptionsPerPedal)

export { getSubscriptionsPerPedal, getSubscriptionsPerPedalController }