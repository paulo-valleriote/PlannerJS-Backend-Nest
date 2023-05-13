import { randomUUID } from 'crypto'
import { Replace } from 'src/helpers/Replace'

export interface UserProps {
  name: string
  role: string
  email: string
  password: string
  createdAt: Date
  admin: boolean
  organizationId?: string | null
  customerDemandId?: string[] | null
}

export class User {
  private _id: string
  private props: UserProps

  constructor(props: Replace<UserProps, { createdAt?: Date }>) {
    this._id = randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  public get id(): string {
    return this._id
  }

  public set name(name: string) {
    this.props.name = name
  }

  public get name(): string {
    return this.props.name
  }

  public set role(role: string) {
    this.props.role = role
  }

  public get role(): string {
    return this.props.role
  }

  public set email(email: string) {
    this.props.email = email
  }

  public get email(): string {
    return this.props.email
  }

  public set password(password: string) {
    this.props.password = password
  }

  public get password(): string {
    return this.props.password
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }

  public set admin(admin: boolean) {
    this.props.admin = admin
  }

  public get admin(): boolean {
    return this.props.admin
  }

  public set organizationId(organizationId: string | null | undefined) {
    if (!organizationId) {
      throw new Error('Invalid organizationId provided')
    }

    this.props.organizationId = organizationId
  }

  public get organizationId(): string | null | undefined {
    return this.props.organizationId
  }

  public set customerDemandId(customerDemandId: string[] | null | undefined) {
    if (!customerDemandId) {
      throw new Error('Invalid customerDemandId provided')
    }

    this.props.customerDemandId = customerDemandId
  }

  public get customerDemandId(): string[] | null | undefined {
    return this.props.customerDemandId
  }
}
