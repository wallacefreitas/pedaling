import { User } from "../entities/user";

export interface UserRepository {
  create(user: User): Promise<User>;
  save(user: User): Promise<void>;
  findUnique(id: string): Promise<User | null>
  findMany(): Promise<User[]>
  findByEmail(email: string): Promise<User | null>;
}