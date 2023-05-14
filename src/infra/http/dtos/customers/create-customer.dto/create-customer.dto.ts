import { IsString } from 'class-validator'

export class CreateCustomerDto {
  @IsString()
  name: string

  @IsString()
  externalInfoLink?: string

  @IsString()
  activityField: string

  @IsString()
  organizationId: string
}
