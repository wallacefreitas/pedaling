import { describe, expect, it } from "vitest";
import { InMemoryUsersRepository } from "../../../infra/repositories/in-memory/in-memory-users-repository";
import { SaveUser } from "./save-user";
import { CreateUser } from "../create-user/create-user";

describe('Save User', () => {
  it('should be able to update an user', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const createUser = new CreateUser(
      usersRepository
    )

    const saveUser = new SaveUser(
      usersRepository
    )

    const user1 = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
    })

    const user2 = await createUser.execute({
      name: 'Mary Ann',
      email: 'maryann@email.com',
    })

    const user2Changed = await saveUser.execute({
      id: user2.id || "",
      name: 'Mary Test',
      email: user2.email
    })

    expect(user2Changed).toHaveProperty('name', 'Mary Test')
  })
})