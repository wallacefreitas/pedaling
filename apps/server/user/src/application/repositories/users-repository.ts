import { UserProps } from "../entities/user";

type User = UserProps

export interface UserRepository {
  create(user: User): Promise<void>;
  save(user: User): Promise<void>;
  remove(id: string): Promise<User[]>;
  findUnique(id: string): Promise<User | null>
  findMany(): Promise<User[]>
  findByEmail(email: string): Promise<User | null>;
}