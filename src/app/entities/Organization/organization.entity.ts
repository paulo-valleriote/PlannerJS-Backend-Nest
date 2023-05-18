import { hashSync } from 'bcrypt'
import { randomUUID } from 'crypto'
import { Replace } from 'src/helpers/Replace'

export class OrganizationProps {
  name: string

  email: string

  password: string

  createdAt: Date
}

export class Organization {
  private _id: string
  private _admin: boolean
  private props: OrganizationProps

  constructor(props: Replace<OrganizationProps, { createdAt?: Date }>) {
    this._id = randomUUID()
    this._admin = true
    this.props = {
      ...props,
      password: hashSync(props.password, 8),
      createdAt: props.createdAt || new Date(),
    }
  }

  public get id(): string {
    return this._id
  }

  public get admin(): boolean {
    return this._admin
  }

  public set name(name: string) {
    this.props.name = name
  }

  public get name(): string {
    return this.props.name
  }

  public set email(email: string) {
    this.props.email = email
  }

  public get email(): string {
    return this.props.email
  }

  public set password(password: string) {
    this.props.password = hashSync(password, 8)
  }

  public get password(): string {
    return this.props.password
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }
}
