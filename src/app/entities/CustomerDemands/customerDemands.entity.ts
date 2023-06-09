import { randomUUID } from 'crypto'
import { Replace } from 'src/helpers/Replace'

export interface CustomerDemandProps {
  customerId: string
  userId: string
  name: string
  description: string
  createdAt: Date
  endLine: string | null
  designer: string | null
  copywriter: string | null
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

  public set endLine(endLine: string | null) {
    this.props.endLine = endLine || null
  }

  public get endLine(): string | null {
    return this.props.endLine
  }

  public set designer(designer: string | null) {
    this.props.designer = designer || null
  }

  public get designer(): string | null {
    return this.props.designer
  }

  public set copywriter(copywriter: string | null) {
    this.props.copywriter = copywriter || null
  }

  public get copywriter(): string | null {
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
