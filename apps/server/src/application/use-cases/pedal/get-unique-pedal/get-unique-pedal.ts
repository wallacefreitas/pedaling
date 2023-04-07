import { PedalProps as Pedal } from "../../../entities/pedal";
import { PedalsRepository } from "../../../repositories/pedals-repository";

type GetUniquePedalResponse = Pedal | null

export class GetUniquePedal {
  constructor(
    private pedalsRepository: PedalsRepository
  ){}

  async execute(id: string): Promise<GetUniquePedalResponse> {
    return await this.pedalsRepository.findUnique(id)
  }
}