import { CreateSubscriptionController } from "../../../../infra/http/controller/subscription/create-subscription-controller"
import { InMemorySubscriptionsRepository } from "../../../../infra/repositories/in-memory/in-memory-subscriptions-repository"
import { PrismaSubscriptonsRepository } from "../../../../infra/repositories/prisma/prisma-subscriptions-repository"
import { CreateSubscription } from "./create-subscription"

const inMemoryPedalsRepository = new InMemorySubscriptionsRepository()
const prismaPedalsRepository = new PrismaSubscriptonsRepository()
const createSubscription = new CreateSubscription(prismaPedalsRepository)
const createSubscriptionController = new CreateSubscriptionController(createSubscription)

export { createSubscription, createSubscriptionController }