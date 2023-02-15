import { randomUUID } from "crypto";
import { describe, expect, it } from "vitest";
import { User } from "../entities/user";
import { InMemoryUsersRepository } from "../../infra/repositories/in-memory/in-memory-users-repository";
import { CreateUser } from "./create-user";

describe('Create User', () => {
  it('should be able to create an user', () => {
    const usersRepository = new InMemoryUsersRepository()
    const createUser = new CreateUser(
      usersRepository
    )

    expect(createUser.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
    })).resolves.toBeInstanceOf(User)
  })

  it('should not be able to create an user with email exists', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const createUser = new CreateUser(
      usersRepository
    )

    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
    })

    expect(createUser.execute({
      name: 'Mary Jane',
      email: 'johndoe@email.com',
    })).rejects.toBeInstanceOf(Error)
  })
})