import { describe, expect, it } from "vitest";
import { Pedal } from "../../entities/pedal";
import { InMemoryPedalsRepository } from "../../../infra/repositories/in-memory/in-memory-pedals-repository";
import { CreatePedal } from "./create-pedal";
import { getFutureDate } from "../../tests/utils/get-future-date";

describe('Create an Pedal', () => {
  it('should be able to create an pedal', () => {
    const pedalsRepository = new InMemoryPedalsRepository()
    const createPedal = new CreatePedal(
      pedalsRepository
    )

    expect(createPedal.execute({
      name: 'John Doe',
      startDate: new Date(),
      startDateRegistration: getFutureDate('2023-03-06'),
      endDateRegistration: getFutureDate('2023-03-08'),
      startPlace: 'Roma',
      additionalInformation: '',
      participantsLimit: 20
    })).resolves.toBeInstanceOf(Pedal)
  })

  it('should not be able to create an user with start date biggher then end date', async () => {
    const usersRepository = new InMemoryPedalsRepository()
    const createPedal = new CreatePedal(
      usersRepository
    )

    expect(createPedal.execute({
      name: 'John Doe',
      startDate: new Date(),
      startDateRegistration: getFutureDate('2023-03-06'),
      endDateRegistration: getFutureDate('2023-03-02'),
      startPlace: 'Roma',
      additionalInformation: '',
      participantsLimit: 20
    })).rejects.toBeInstanceOf(Error)
  })
})