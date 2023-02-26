import { expect, test } from 'vitest'
import { Pedal } from './pedal'

test('create an pedal', () => {
  const startsAt = new Date()
  const startsRegistrationat = new Date()
  const endsRegistrationAt = new Date()

  startsRegistrationat.setDate(startsRegistrationat.getDate() + 1)
  endsRegistrationAt.setDate(endsRegistrationAt.getDate() + 2)

  const pedal = new Pedal({
    name: 'John Doe',
    startDate: startsAt,
    startDateRegistration: startsRegistrationat,
    endDateRegistration: endsRegistrationAt,
    startPlace: 'Madrid',
    additionalInformation: '',
    participantsLimit: 0,
  })

  expect(pedal).toBeInstanceOf(Pedal)
})