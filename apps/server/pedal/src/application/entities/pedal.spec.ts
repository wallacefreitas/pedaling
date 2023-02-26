import { expect, test } from 'vitest'
import { Pedal } from './pedal'

test('create an pedal', () => {
  const startsAt = new Date()
  const startsRegistrationAt = new Date()
  const endsRegistrationAt = new Date()

  startsRegistrationAt.setDate(startsRegistrationAt.getDate() + 1)
  endsRegistrationAt.setDate(endsRegistrationAt.getDate() + 2)

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

test('cannot create an pedal with end date before start date', () => {
  const startsAt = new Date()
  const startsRegistrationAt = new Date()
  const endsRegistrationAt = new Date()

  startsRegistrationAt.setDate(startsRegistrationAt.getDate() + 2)
  endsRegistrationAt.setDate(endsRegistrationAt.getDate() + 1)

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

test('cannot create an pedal with start date before now', () => {
  const startsAt = new Date()
  const startsRegistrationAt = new Date()
  const endsRegistrationAt = new Date()

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