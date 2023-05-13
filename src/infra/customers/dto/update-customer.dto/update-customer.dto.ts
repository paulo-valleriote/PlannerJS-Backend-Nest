import { PartialType } from '@nestjs/mapped-types'
import { CreateCustomerDto } from '../create-customer.dto/create-customer.dto'
import { IsNumber } from 'class-validator'

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @IsNumber()
  delayedPosts?: number

  @IsNumber()
  activeCampaigns?: number
}
