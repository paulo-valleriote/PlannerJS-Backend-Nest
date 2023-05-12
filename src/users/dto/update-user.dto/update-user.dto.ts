import { PartialType } from '@nestjs/mapped-types'
import { IsString } from 'class-validator'

import { CreateUserDto } from '../create-user.dto/create-user.dto'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  organizationId: string

  customerDemandId?: string
}
