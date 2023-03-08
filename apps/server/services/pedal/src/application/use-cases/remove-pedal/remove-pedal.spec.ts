import { describe, expect, it } from "vitest";
import { Pedal } from "../../entities/pedal";
import { InMemoryPedalsRepository } from "../../../infra/repositories/in-memory/in-memory-pedals-repository";
import { RemovePedal } from "./remove-pedal";
import { CreatePedal } from "../create-pedal/create-pedal";
import { getFutureDate } from "../../tests/utils/get-future-date";

describe('Remove Pedal', () => {
  it('should be able to delete an pedal', async () => {
    const pedalsRepository = new InMemoryPedalsRepository()
    const removePedal = new RemovePedal(
      pedalsRepository
    )
    const createPedal = new CreatePedal(
      pedalsRepository
    )

    await createPedal.execute({
      name: 'John Doe',
      startDate: getFutureDate('2023-04-06'),
      startDateRegistration: getFutureDate('2023-03-06'),
      endDateRegistration: getFutureDate('2023-03-08'),
      startPlace: 'Roma',
      additionalInformation: '',
      participantsLimit: 20
    })

    const { id } = await createPedal.execute({
      name: 'Mary Jane',
      startDate: getFutureDate('2023-04-06'),
      startDateRegistration: getFutureDate('2023-03-06'),
      endDateRegistration: getFutureDate('2023-03-08'),
      startPlace: 'Berlim',
      additionalInformation: '',
      participantsLimit: 20
    })

    await removePedal.execute(id || "")
    
    expect(pedalsRepository.pedals).toHaveLength(1)
  })

  it('should not be able to delete an pedal not found', async () => {
    const pedalsRepository = new InMemoryPedalsRepository()
    const removePedal = new RemovePedal(
      pedalsRepository
    )

    expect(removePedal.execute('12345678'))
      .rejects.toBeInstanceOf(Error)
  })
})