import { describe, expect, it } from "vitest";
import { User } from "../../../entities/user";
import { InMemoryUsersRepository } from "../../../../infra/repositories/in-memory/in-memory-users-repository";
import { GetUserByEmail } from "./get-user-by-email";
import { CreateUser } from "../create-user/create-user";

describe('Get an user by email', () => {
  it('should be able to get an user by email', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(
      usersRepository
    )
    const getUserByEmail = new GetUserByEmail(
      usersRepository
    )

    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
    })

    const user = await getUserByEmail.execute("johndoe@email.com");

    expect(user).toBeInstanceOf(User);
  })

  it('should not be able to get an user by email', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(
      usersRepository
    )
    const getUserByEmail = new GetUserByEmail(
      usersRepository
    )

    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
    })

    const user = await getUserByEmail.execute("johndoe@email.com.br");

    expect(user).toBe(null)
  })
})