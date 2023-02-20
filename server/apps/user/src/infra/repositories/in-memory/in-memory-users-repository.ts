import { User } from "../../../application/entities/user";
import { UserRepository } from "../../../application/repositories/users-repository";

export class InMemoryUsersRepository implements UserRepository {
  public users: User[] = []
  
  async create(user: User): Promise<User> {
    this.users.push(user);
    return new User(user);
  }

  async save(user: User): Promise<void> {
    return this.users.filter( data => data.id === user.id ).forEach( data => data = user )
  }

  async findUnique(id?: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null
  }

  async findMany(): Promise<User[]> {
    return this.users
  }
  
  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null
  }
}