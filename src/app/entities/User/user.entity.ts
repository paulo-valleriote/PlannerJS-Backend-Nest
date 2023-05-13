import { Replace } from 'src/helpers/Replace'

export interface UserProps {
  id: string
  name: string
  role: string
  email: string
  password: string
  createdAt: Date
  admin: boolean
  organizationId: string
  customerDemandId?: string[] | null
}

export class User {
  private props: UserProps

  constructor(props: Replace<UserProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  public get id(): string {
    return this.props.id
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

  public set organizationId(organizationId: string) {
    this.props.organizationId = organizationId
  }

  public get organizationId(): string {
    return this.props.organizationId
  }

  public set customerDemandId(customerDemandId: string[] | null | undefined) {
    this.props.customerDemandId = customerDemandId
  }

  public get customerDemandId(): string[] | null | undefined {
    return this.props.customerDemandId
  }
}
