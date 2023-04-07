import { Router } from "express";
import { createPedalController } from "./application/use-cases/pedal/create-pedal";
import { getAllPedalsController } from "./application/use-cases/pedal/get-all-pedals";
import { removePedalController } from "./application/use-cases/pedal/remove-pedal";
import { savePedalController } from "./application/use-cases/pedal/save-pedal";
import { createUserController } from "./application/use-cases/user/create-user";
import { getAllUsersController } from "./application/use-cases/user/get-all-users";
import { getUserByEmailController } from "./application/use-cases/user/get-user-by-email";
import { saveUserController } from "./application/use-cases/user/save-user";
import { AuthService } from "./middleware/auth";

const router = Router()
const authService = new AuthService("admin", "admin")

router.post('/', (_, response) => {
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

router.get('/users', authService.authorization, (request, response) => {
  return getAllUsersController.handle(request, response)
})

router.post('/users', authService.authorization, (request, response) => {
  return createUserController.handle(request, response)
})

router.post('/users/email', authService.authorization, (request, response) => {
  return getUserByEmailController.handle(request, response)
})

router.put('/users/:id', authService.authorization, (request, response) => {
  return saveUserController.handle(request, response)
})

export { router }