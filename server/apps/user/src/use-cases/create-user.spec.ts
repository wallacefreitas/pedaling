import { randomUUID } from "crypto";
import { describe, expect, it } from "vitest";
import { User } from "../entities/user";
import { CreateUser } from "./create-user";

describe('Create User', () => {
  it('should be able to create an user', () => {
    const createUser = new CreateUser()

    expect(createUser.execute({
      id: randomUUID(),
      name: 'John Doe',
      email: 'johndoe@email.com',
      createdAt: new Date()
    })).resolves.toBeInstanceOf(User)
  })
})