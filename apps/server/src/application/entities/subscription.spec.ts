import { expect, test } from 'vitest'
import { getFutureDate } from '../tests/utils/get-future-date'
import { Subscription } from './subscription'
import { randomUUID } from 'crypto'

test('create an subscpriton', () => {
  const subscriptionDate = getFutureDate('2023-05-28')
  const rideId = randomUUID();

  const subscription = new Subscription({
    rideId,
    subscriptionDate,
    userId: randomUUID(),
  })

  expect(subscription).toBeInstanceOf(Subscription)
  expect(subscription.rideId).toEqual(rideId)
})

test('create an subscpriton without rideId', () => {
  const subscriptionDate = getFutureDate('2023-05-28')

  expect(() => new Subscription({
    rideId: "",
    subscriptionDate: subscriptionDate,
    userId: randomUUID()
  }))
  .toThrow(new Error("String must contain at least 1 character(s)"))
})