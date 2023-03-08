import { describe, expect, expectTypeOf, it } from "vitest";
import { Pedal } from "../../entities/pedal";
import { InMemoryPedalsRepository } from "../../../infra/repositories/in-memory/in-memory-pedals-repository";
import { GetAllPedals } from "./get-all-pedals";
import { CreatePedal } from "../create-pedal/create-pedal";
import { getFutureDate } from "../../tests/utils/get-future-date";

describe('Get All Pedals', () => {
  it('should be able to get all pedals', async () => {
    const pedalsRepository = new InMemoryPedalsRepository()
    const createPedal = new CreatePedal(
      pedalsRepository
    )
    const getAllPedals = new GetAllPedals(
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

    const pedals = await getAllPedals.execute()
    
    expectTypeOf(pedals).toEqualTypeOf<Pedal[]>()
    expect(pedals.length).toBeGreaterThanOrEqual(1)
  })
})