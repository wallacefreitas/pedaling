import { describe, expect, expectTypeOf, it } from "vitest";
import { Pedal } from "../../../entities/pedal";
import { InMemoryPedalsRepository } from "../../../../infra/repositories/in-memory/in-memory-pedals-repository";
import { GetUniquePedal } from "./get-unique-pedal";
import { CreatePedal } from "../create-pedal/create-pedal";
import { getFutureDate } from "../../../tests/utils/get-future-date";

describe('Get Unique Pedal', () => {
  it('should be able to get unique pedal', async () => {
    const pedalsRepository = new InMemoryPedalsRepository()
    const createPedal = new CreatePedal(
      pedalsRepository
    )
    const getUniquePedal = new GetUniquePedal(
      pedalsRepository
    )

    const { id } = await createPedal.execute({
      name: 'John Doe',
      startDate: getFutureDate('2023-04-06'),
      startDateRegistration: getFutureDate('2023-03-06'),
      endDateRegistration: getFutureDate('2023-03-08'),
      startPlace: 'Roma',
      additionalInformation: '',
      participantsLimit: 20
    })

    const pedal = await getUniquePedal.execute(id || "")
    
    //expectTypeOf(pedal).toEqualTypeOf<Pedal | null>()
    expect(pedal).toHaveProperty('name', 'John Doe')
  })
})