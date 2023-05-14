import { IsDate, IsString } from 'class-validator'
import { randomUUID } from 'crypto'
import { Replace } from 'src/helpers/Replace'

export class OrganizationProps {
  @IsString()
  name: string

  @IsString()
  email: string

  @IsString()
  password: string

  @IsDate()
  createdAt: Date
}

export class Organization {
  private _id: string
  private props: OrganizationProps

  constructor(props: Replace<OrganizationProps, { createdAt?: Date }>) {
    this._id = randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
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

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }
}
