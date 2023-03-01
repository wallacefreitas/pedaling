import { Router } from "express";
import { createPedalController } from "./application/use-cases/create-pedal";
import { getAllPedalsController } from "./application/use-cases/get-all-pedals";
import { removePedalController } from "./application/use-cases/remove-pedal";

const router = Router()

router.get('/pedal', (request, response) => {
  return getAllPedalsController.handle(request, response)
})

router.post('/pedal', (request, response) => {
  return createPedalController.handle(request, response)
})

// router.put('/users/:id', (request, response) => {
//   return saveUserController.handle(request, response)
// })

router.delete('/pedal/:id', (request, response) => {
  return removePedalController.handle(request, response)
})

export { router }