import { User } from "../entities/user";

export interface UserRepository {
  create(user: User): Promise<void>;
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}