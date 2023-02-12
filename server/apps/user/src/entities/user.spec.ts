import { randomUUID } from 'node:crypto'
import { expect, test } from 'vitest'
import { User } from './user'

test('create an user', () => {
  const user = new User({
    id: randomUUID(),
    name: 'John Doe',
    email: 'johndoe@email.com',
    createdAt: new Date()
  })

  expect(user).toBeInstanceOf(User)
  expect(user.name).toEqual('John Doe')
})