import { BadRequestException } from '@nestjs/common'
import { IsDate, IsString } from 'class-validator'
import { randomUUID } from 'crypto'
import { Replace } from 'src/helpers/Replace'

class CustomerProps {
  @IsString()
  name: string

  @IsDate()
  createdAt: Date

  @IsString()
  activityField: string

  @IsString()
  organizationId: string

  activeCampaigns?: number

  externalInfoLink: string | null
}

export class Customer {
  private _id: string
  private props: CustomerProps

  constructor(props: Replace<CustomerProps, { createdAt?: Date }>) {
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

  public set externalInfoLink(externalInfoLink: string | null) {
    if (typeof externalInfoLink !== 'string' && externalInfoLink !== null) {
      throw new BadRequestException('External Info link must be a string')
    }

    this.props.externalInfoLink = externalInfoLink
  }

  public get externalInfoLink(): string | null {
    return this.props.externalInfoLink
  }

  public set activityField(activityField: string) {
    this.props.activityField = activityField
  }

  public get activityField(): string {
    return this.props.activityField
  }

  public set activeCampaigns(activeCampaigns: number | null | undefined) {
    this.props.activeCampaigns = activeCampaigns || 0
  }

  public get activeCampaigns(): number | null | undefined {
    return this.props.activeCampaigns
  }

  public set organizationId(organizationId: string) {
    if (!organizationId) {
      throw new Error('Customer needs an organization to be created')
    }
    this.props.organizationId = organizationId
  }

  public get organizationId(): string {
    return this.props.organizationId
  }
}
