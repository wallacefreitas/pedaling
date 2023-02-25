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

    const user1 = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
    })

    const user2 = await createUser.execute({
      name: 'Mary Ann',
      email: 'maryann@email.com',
    })

    user2.name = 'Mary Test'

    expect(saveUser.execute(user2)).resolves.toBeInstanceOf(User)
  })
})