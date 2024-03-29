import { describe, expect, it } from "vitest";
import { InMemoryPedalsRepository } from "../../../../infra/repositories/in-memory/in-memory-pedals-repository";
import { SavePedal } from "./save-pedal";
import { CreatePedal } from "../create-pedal/create-pedal";
import { getFutureDate } from "../../../tests/utils/get-future-date";

describe('Save User', () => {
  it('should be able to update an user', async () => {
    const pedalsRepository = new InMemoryPedalsRepository()
    const createPedal = new CreatePedal(
      pedalsRepository
    )

    const savePedal = new SavePedal(
      pedalsRepository
    )

    await createPedal.execute({
      name: 'Pedal 1',
      startDate: getFutureDate('2023-04-06'),
      startDateRegistration: getFutureDate('2023-03-06'),
      endDateRegistration: getFutureDate('2023-03-08'),
      startPlace: 'Roma',
      additionalInformation: '',
      participantsLimit: 20
    })

    const pedal = await createPedal.execute({
      name: 'Pedal 2',
      startDate: getFutureDate('2023-06-06'),
      startDateRegistration: getFutureDate('2023-03-06'),
      endDateRegistration: getFutureDate('2023-03-08'),
      startPlace: 'Roma',
      additionalInformation: '',
      participantsLimit: 20
    })

    const pedalChanged = await savePedal.execute({
      id: pedal.id || "",
      name: 'Pedal 2 Test',
      startDate: pedal.startDate,
      startDateRegistration: pedal.startDateRegistration,
      endDateRegistration: pedal.endDateRegistration,
      startPlace: pedal.startPlace,
      additionalInformation: pedal.additionalInformation,
      participantsLimit: pedal.participantsLimit
    })

    expect(pedalChanged).toHaveProperty('name', 'Pedal 2 Test')
  })
})