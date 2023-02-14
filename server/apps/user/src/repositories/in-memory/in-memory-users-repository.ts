import { User } from "../../entities/user";
import { UserRepository } from "../users-repository";

export class InMemoryUsersRepository implements UserRepository {
  public users: User[] = []

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
  
  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null
  }
}