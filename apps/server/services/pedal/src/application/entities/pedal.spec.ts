import { expect, test } from 'vitest'
import { getFutureDate } from '../tests/utils/get-future-date'
import { Pedal } from './pedal'

test('create an pedal', () => {
  const startsAt = getFutureDate('2023-05-28')
  const startsRegistrationAt = getFutureDate('2023-04-26')
  const endsRegistrationAt = getFutureDate('2023-04-28')

  const pedal = new Pedal({
    name: 'Pedal 1',
    startDate: startsAt,
    startDateRegistration: startsRegistrationAt,
    endDateRegistration: endsRegistrationAt,
    startPlace: 'Madrid',
    additionalInformation: '',
    participantsLimit: 0,
  })

  expect(pedal).toBeInstanceOf(Pedal)
  expect(pedal.name).toEqual('Pedal 1')
})

test('cannot create an pedal with end date registration before start date registration', () => {
  const startsAt = getFutureDate('2023-04-28')
  const startsRegistrationAt = getFutureDate('2023-04-26')
  const endsRegistrationAt = getFutureDate('2023-04-25')

  expect(() => {
    return new Pedal({
      name: 'John Doe',
      startDate: startsAt,
      startDateRegistration: startsRegistrationAt,
      endDateRegistration: endsRegistrationAt,
      startPlace: 'Madrid',
      additionalInformation: '',
      participantsLimit: 0,
    })
  }).toThrow(new Error('Invalid end date registration'))
})

test('cannot create an pedal with start date registration before now', () => {
  const startsAt = new Date()
  const startsRegistrationAt = new Date()
  const endsRegistrationAt = new Date()

  startsAt.setDate(startsAt.getDate() + 6)
  startsRegistrationAt.setDate(startsRegistrationAt.getDate() - 1)
  endsRegistrationAt.setDate(endsRegistrationAt.getDate() + 3)

  expect(() => {
    return new Pedal({
      name: 'John Doe',
      startDate: startsAt,
      startDateRegistration: startsRegistrationAt,
      endDateRegistration: endsRegistrationAt,
      startPlace: 'Madrid',
      additionalInformation: '',
      participantsLimit: 0,
    })
  }).toThrow(new Error('Invalid start date registration'))
})

test('cannot create an pedal with start date after start date registration', () => {
  const startsAt = new Date()
  const startsRegistrationAt = getFutureDate('2023-03-08')
  const endsRegistrationAt = getFutureDate('2023-04-09')

  startsAt.setDate(startsAt.getDate() + 5)

  expect(() => {
    return new Pedal({
      name: 'John Doe',
      startDate: startsAt,
      startDateRegistration: startsRegistrationAt,
      endDateRegistration: endsRegistrationAt,
      startPlace: 'Madrid',
      additionalInformation: '',
      participantsLimit: 0,
    })
  }).toThrow(new Error('Invalid start date of the pedaling'))
})