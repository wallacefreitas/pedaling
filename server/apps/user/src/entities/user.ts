export interface UserProps {
  id?: string
  name: string
  email: string
  createdAt?: Date
}

export class User {
  private props: UserProps

  constructor(props: UserProps) {
    this.props = props
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