import { randomUUID } from 'node:crypto';
import { z, ZodError } from 'zod';

export interface UserProps {
  id?: string
  name: string
  email: string
}

export class User {
  private props: UserProps

  constructor(props: UserProps) {
    const userSchema = z.object({
      id: z.string().uuid(),
      name: z.string().min(1),
      email: z.string().email(),
    })

    if (!props.id) {
      props.id = randomUUID()
    }

    try {
      const user = userSchema.parse(props)
      this.props = user;

    } catch(err) {

      if (err instanceof ZodError) {
        err.errors.map(error => { throw new Error(error.message) } )
      }

      throw new Error("Unknown error")
    }
  }

  get id() {
    return this.props.id
  }

  get name() {
    return this.props.name
  }

  set name(name: string) {
    this.props.name = name
  }

  get email() {
    return this.props.email
  }

  set email(email: string) {
    this.props.email = email
  }
}