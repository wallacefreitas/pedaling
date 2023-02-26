import { PedalProps } from "../entities/pedal";

type Pedal = PedalProps

export interface PedalsRepository {
  create(pedal: Pedal): Promise<void>;
  save(pedal: Pedal): Promise<void>;
  remove(id: string): Promise<Pedal[]>;
  findUnique(id: string): Promise<Pedal | null>
  findMany(): Promise<Pedal[]>
}