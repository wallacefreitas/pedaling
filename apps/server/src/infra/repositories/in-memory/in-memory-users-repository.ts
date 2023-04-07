import { UserProps } from "../../../application/entities/user";
import { UsersRepository } from "../../../application/repositories/users-repository";

type User = UserProps

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [
    {
      id: '123456789',
      name: 'Teste 1',
      email: 'teste@email.com'
    },
    {
      id: '987654321',
      name: 'Teste 2',
      email: 'teste2@email.com'
    }
  ]
  
  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async save(user: User): Promise<void> {
    this.users.filter( data => data.id === user.id ).forEach( data => data = user )
  }

  async remove(id: string): Promise<void> {
    this.users.splice( this.users.findIndex( user => user.id === id ), 1 )
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