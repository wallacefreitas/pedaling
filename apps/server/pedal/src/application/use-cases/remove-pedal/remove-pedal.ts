import { PedalsRepository } from "../../repositories/pedals-repository";

export class RemovePedal {
  constructor(
    private pedalsRepository: PedalsRepository
  ){}

  async execute(id: string): Promise<void> {
    const user = await this.pedalsRepository.findUnique(id);

    if (!user) {
      throw new Error('User does not exist')
    }

    return await this.pedalsRepository.remove(id)
  }
}