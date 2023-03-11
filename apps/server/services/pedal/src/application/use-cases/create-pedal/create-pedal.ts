import { Pedal } from "../../entities/pedal";
import { PedalsRepository } from "../../repositories/pedals-repository";

interface CreatePedalRequest {
  name: string;
  startDate: Date
  startDateRegistration: Date
  endDateRegistration: Date
  additionalInformation?: string | null
  startPlace: string
  participantsLimit?: number
}

type CreatePedalResponse = Pedal

export class CreatePedal {
  constructor(
    private pedalsRepository: PedalsRepository
  ){}

  async execute({
    name,
    startDate,
    startDateRegistration,
    endDateRegistration,
    additionalInformation,
    startPlace,
    participantsLimit
  }: CreatePedalRequest): Promise<CreatePedalResponse> {
    const pedal = new Pedal({
      name,
      startDate,
      startDateRegistration,
      endDateRegistration,
      additionalInformation,
      startPlace,
      participantsLimit
    })

    await this.pedalsRepository.create(pedal)

    return pedal
  }
}