import { Router } from "express";
import { createUserController } from "./application/use-cases/create-user";
import { saveUserController } from "./application/use-cases/save-user";

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})

router.put('/users/:id', (request, response) => {
  return saveUserController.handle(request, response)
})

export { router }