import { Router } from "express";
import { createPedalController } from "./application/use-cases/create-pedal";
import { getAllPedalsController } from "./application/use-cases/get-all-pedals";
import { removePedalController } from "./application/use-cases/remove-pedal";
import { savePedalController } from "./application/use-cases/save-pedal";
import { AuthService } from "../../../middleware/auth";

const router = Router()
const authService = new AuthService("admin", "admin")

router.post('/', (request, response) => {
  const token = authService.getToken();
  return response.json({ token });
})

router.get('/pedal', authService.authorization, (request, response) => {
  return getAllPedalsController.handle(request, response)
})

router.post('/pedal', authService.authorization, (request, response) => {
  return createPedalController.handle(request, response)
})

router.put('/pedal/:id', authService.authorization, (request, response) => {
  return savePedalController.handle(request, response)
})

router.delete('/pedal/:id', authService.authorization, (request, response) => {
  return removePedalController.handle(request, response)
})

export { router }