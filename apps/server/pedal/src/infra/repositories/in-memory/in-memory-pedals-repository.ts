import { Pedal } from "../../../application/entities/pedal";
import { PedalsRepository } from "../../../application/repositories/pedals-repository";

export class InMemoryPedalsRepository implements PedalsRepository {
  public pedals: Pedal[] = []
  
  async create(pedal: Pedal): Promise<void> {
    this.pedals.push(pedal);
  }

  async remove(id: string): Promise<void> {
    this.pedals.splice( this.pedals.findIndex( pedal => pedal.id === id ), 1 )
  }


}