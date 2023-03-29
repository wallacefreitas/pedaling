import { Router } from "express";
import { createUserController } from "./application/use-cases/create-user";
import { getAllUsersController } from "./application/use-cases/get-all-users";
import { getUserByEmailController } from "./application/use-cases/get-user-by-email";
import { saveUserController } from "./application/use-cases/save-user";
import { AuthService } from "../../../middleware/auth";

const router = Router()
const authService = new AuthService("admin", "admin")

router.post('/', (request, response) => {
  const token = authService.getToken();
  return response.json({ token });
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