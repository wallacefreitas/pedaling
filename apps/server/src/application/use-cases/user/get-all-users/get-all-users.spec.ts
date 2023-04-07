import { describe, expect, expectTypeOf, it } from "vitest";
import { UserProps } from "../../../entities/user";
import { InMemoryUsersRepository } from "../../../../infra/repositories/in-memory/in-memory-users-repository";
import { GetAllUsers } from "./get-all-users";
import { CreateUser } from "../create-user/create-user";

type User = UserProps

describe('Get All Users', () => {
  it('should be able to get all users', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const createUser = new CreateUser(
      usersRepository
    )
    const getAllUsers = new GetAllUsers(
      usersRepository
    )

    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
    })

    const users = await getAllUsers.execute()
    
    expectTypeOf(users).toEqualTypeOf<User[]>()
    expect(users.length).toBeGreaterThanOrEqual(1)
  })
})