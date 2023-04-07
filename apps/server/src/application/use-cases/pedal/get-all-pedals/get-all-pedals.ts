import { PedalProps as Pedal } from "../../../entities/pedal";
import { PedalsRepository } from "../../../repositories/pedals-repository";

type GetAllPedalsResponse = Pedal[]

export class GetAllPedals {
  constructor(
    private pedalsRepository: PedalsRepository
  ){}

  async execute(): Promise<GetAllPedalsResponse> {
    return await this.pedalsRepository.findMany()
  }
}