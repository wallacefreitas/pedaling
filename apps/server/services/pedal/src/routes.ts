import { Router } from "express";
import { createPedalController } from "./application/use-cases/create-pedal";
import { getAllPedalsController } from "./application/use-cases/get-all-pedals";
import { removePedalController } from "./application/use-cases/remove-pedal";
import { savePedalController } from "./application/use-cases/save-pedal";

const router = Router()

router.get('/pedal', (request, response) => {
  return getAllPedalsController.handle(request, response)
})

router.post('/pedal', (request, response) => {
  return createPedalController.handle(request, response)
})

router.put('/pedal/:id', (request, response) => {
  return savePedalController.handle(request, response)
})

router.delete('/pedal/:id', (request, response) => {
  return removePedalController.handle(request, response)
})

export { router }