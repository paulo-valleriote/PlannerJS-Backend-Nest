import { BadRequestException } from '@nestjs/common'
import { IsDate, IsString } from 'class-validator'
import { randomUUID } from 'crypto'
import { Replace } from 'src/helpers/Replace'
import { StringLiteralLike } from 'typescript'

export class CustomerDemandProps {
  @IsString()
  customerId: string

  @IsString()
  userId: string

  @IsString()
  name: string

  @IsString()
  description: string

  @IsDate()
  createdAt: Date

  endLine: string
  designer: string
  copywriter: string
  readyToSend?: boolean | undefined
  readyToPost?: boolean | undefined
  posted?: boolean | undefined
}

export class CustomerDemand {
  private _id: string
  private props: CustomerDemandProps

  constructor(props: Replace<CustomerDemandProps, { createdAt?: Date }>) {
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

  public set description(description: string) {
    this.props.description = description
  }

  public get description(): string {
    return this.props.description
  }

  public set userId(userId: string) {
    this.props.userId = userId
  }

  public get userId(): string {
    return this.props.userId
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }

  public set endLine(endLine: string) {
    if (typeof endLine !== 'string') {
      throw new BadRequestException('End Line must be a string')
    }
    this.props.endLine = endLine
  }

  public get endLine(): string {
    return this.props.endLine
  }

  public set designer(designer: string) {
    if (typeof designer !== 'string') {
      throw new BadRequestException('Designer must be a string')
    }
    this.props.designer = designer
  }

  public get designer(): string {
    return this.props.designer
  }

  public set copywriter(copywriter: string) {
    if (typeof copywriter !== 'string') {
      throw new BadRequestException('Copywriter must be a string')
    }
    this.props.copywriter
  }

  public get copywriter(): string {
    return this.props.copywriter
  }

  public set readyToSend(readyToSend: boolean | undefined) {
    this.props.readyToSend = readyToSend
  }

  public get readyToSend(): boolean | undefined {
    return this.props.readyToSend
  }

  public set readyToPost(readyToPost: boolean | undefined) {
    this.props.readyToPost = readyToPost
  }

  public get readyToPost(): boolean | undefined {
    return this.props.readyToPost
  }

  public set posted(posted: boolean | undefined) {
    this.props.posted = posted
  }

  public get posted(): boolean | undefined {
    return this.props.posted
  }

  public set customerId(customerId: string) {
    this.props.customerId = customerId
  }

  public get customerId(): string {
    return this.props.customerId
  }
}
