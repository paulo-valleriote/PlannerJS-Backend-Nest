import { PartialType } from '@nestjs/mapped-types'
import { IsString } from 'class-validator'

import { RegisterUserDto } from '../register-user.dto/register-user.dto'

export class UpdateUserDto extends PartialType(RegisterUserDto) {
  @IsString()
  organizationId?: string

  customerDemandId?: string
}
