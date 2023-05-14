import { PartialType } from '@nestjs/mapped-types'
import { IsBoolean } from 'class-validator'

import { CreateCustomerDemandsDto } from '../create-customerDemand.dto/create-customerDemands.dto'

export class UpdateCustomerDemandsDto extends PartialType(
  CreateCustomerDemandsDto,
) {
  @IsBoolean()
  readyToSend?: boolean

  @IsBoolean()
  readyToPost?: boolean

  @IsBoolean()
  posted?: boolean
}
