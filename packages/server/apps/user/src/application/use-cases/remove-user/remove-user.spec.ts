import { describe, expect, it } from "vitest";
import { UserProps } from "../../entities/user";
import { InMemoryUsersRepository } from "../../../infra/repositories/in-memory/in-memory-users-repository";
import { RemoveUser } from "./remove-user";

type User = UserProps

describe('Delete User', () => {
  it('should be able to delete an user', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const removeUser = new RemoveUser(
      usersRepository
    )

    const users = await removeUser.execute('123456789')
    
    expect(users).toHaveLength(1)
  })

  it('should not be able to delete an user not found', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const removeUser = new RemoveUser(
      usersRepository
    )

    expect(removeUser.execute('12345678'))
      .rejects.toBeInstanceOf(Error)
  })
})