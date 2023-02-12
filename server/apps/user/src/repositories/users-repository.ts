import { User } from "../entities/user";

export interface UsersRepository {
  findAll(): Promise<User[]>;
}