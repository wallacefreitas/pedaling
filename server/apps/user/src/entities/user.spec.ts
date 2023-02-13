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

test('user email validation', () => {
  expect(() => new User({
    id: randomUUID(),
    name: 'John Doe',
    email: 'johndoe',
    createdAt: new Date()
  }))
  .toThrow(new Error('Invalid email'))
})

test('empty name validation', () => {
  expect(() => new User({
    id: randomUUID(),
    name: '',
    email: 'johndoe@email.com',
    createdAt: new Date()
  }))
  .toThrow(new Error('String must contain at least 1 character(s)'))
})