import { randomUUID } from 'crypto'
import { Replace } from 'src/helpers/Replace'

export interface CustomerProps {
  name: string
  createdAt: Date
  externalInfoLink: string | null
  activityField: string
  delayedPosts?: number
  activeCampaigns?: number
  organizationId: string
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

  public set delayedPosts(delayedPosts: number | null | undefined) {
    this.props.delayedPosts = delayedPosts || 0
  }

  public get delayedPosts(): number | null | undefined {
    return this.props.delayedPosts
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
