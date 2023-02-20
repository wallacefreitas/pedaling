import { describe, expect, it } from "vitest";
import { User } from "../../entities/user";
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

    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
    })

    await createUser.execute({
      name: 'Mary Ann',
      email: 'maryann@email.com',
    })

    expect(saveUser.execute({
      name: 'Mary Test',
      email: 'maryann@email.com',
    })).resolves.toBeInstanceOf(User)
  })
})