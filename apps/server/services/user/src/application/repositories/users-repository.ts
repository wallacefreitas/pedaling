import { UserProps } from "../entities/user";

type User = UserProps

export interface UsersRepository {
  create(user: User): Promise<void>;
  save(user: User): Promise<void>;
  remove(id: string): Promise<void>;
  findUnique(id: string): Promise<User | null>
  findMany(): Promise<User[]>
  findByEmail(email: string): Promise<User | null>;
}