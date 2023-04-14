import { Router } from "express";
import { AuthService } from "./middleware/auth";

import * as pedalUseCase from "./application/use-cases/pedal"
import * as userUseCase from "./application/use-cases/user"
import * as subscriptionUseCase from "./application/use-cases/subscription"

const router = Router()
const authService = new AuthService()

router.post('/auth', (request, response) => {
  const { username, password } = request.body;
  const token = authService.getToken(username, password);
  return response.json({ token });
})

router.get('/pedal', authService.authorization, (request, response) => {
  return pedalUseCase.getAllPedalsController.handle(request, response)
})

router.post('/pedal', authService.authorization, (request, response) => {
  return pedalUseCase.createPedalController.handle(request, response)
})

router.put('/pedal/:id', authService.authorization, (request, response) => {
  return pedalUseCase.savePedalController.handle(request, response)
})

router.delete('/pedal/:id', authService.authorization, (request, response) => {
  return pedalUseCase.removePedalController.handle(request, response)
})

router.get('/users', authService.authorization, (request, response) => {
  return userUseCase.getAllUsersController.handle(request, response)
})

router.post('/users', authService.authorization, (request, response) => {
  return userUseCase.createUserController.handle(request, response)
})

router.post('/users/email', authService.authorization, (request, response) => {
  return userUseCase.getUserByEmailController.handle(request, response)
})

router.put('/users/:id', authService.authorization, (request, response) => {
  return userUseCase.saveUserController.handle(request, response)
})

router.post('/subscription', authService.authorization, (request, response) => {
  return subscriptionUseCase.createSubscriptionController.handle(request, response)
})

router.get('/subscription_per_pedal/:pedalId', authService.authorization, (request, response) => {
  return subscriptionUseCase.getSubscriptionsPerPedalController.handle(request, response)
})

export { router }