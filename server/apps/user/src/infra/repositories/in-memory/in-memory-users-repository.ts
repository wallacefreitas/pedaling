import { User } from "../../../application/entities/user";
import { UserRepository } from "../../../application/repositories/users-repository";

export class InMemoryUsersRepository implements UserRepository {
  public users: User[] = []

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async save(user: User): Promise<void> {
    
  }

  async findAll(): Promise<User[] | null> {
    return []
  }

  async findById(id: string): Promise<User | null> {
    return null
  }
  
  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null
  }
}