import { User } from "../entities/user";

export interface UserRepository {
  create(user: User): Promise<void>;
  save(user: User): Promise<void>;
  findAll(): Promise<User[] | null>
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>;
}