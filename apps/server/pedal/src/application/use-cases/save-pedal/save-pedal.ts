import { Pedal } from "../../entities/pedal";
import { PedalsRepository } from "../../repositories/pedals-repository";

interface SavePedalRequest {
  id: string;
  name: string;
  startDate: Date
  startDateRegistration: Date
  endDateRegistration: Date
  additionalInformation?: string | null
  startPlace: string
  participantsLimit?: number
}

type SavePedalResponse = Pedal

export class SavePedal {
  constructor(
    private pedalsRepository: PedalsRepository
  ){}

  async execute({ 
    id,
    name, 
    startDate, 
    startDateRegistration, 
    endDateRegistration, 
    additionalInformation, 
    startPlace, 
    participantsLimit
  }: SavePedalRequest): Promise<SavePedalResponse> {
    const pedalAlreadyExists = await this.pedalsRepository.findUnique(id);

    if (!pedalAlreadyExists) {
      throw new Error('Pedal does not exists')
    }

    const pedal = new Pedal({
      name, 
      startDate, 
      startDateRegistration, 
      endDateRegistration, 
      additionalInformation, 
      startPlace, 
      participantsLimit
    })

    await this.pedalsRepository.save(pedal)

    return pedal
  }
}