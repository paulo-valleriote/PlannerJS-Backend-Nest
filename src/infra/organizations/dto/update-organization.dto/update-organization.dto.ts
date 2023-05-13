import { PartialType } from '@nestjs/mapped-types'
import { IsString } from 'class-validator'

import { CreateOrganizationDto } from '../create-organization.dto/create-organization.dto'

export class UpdateOrganizationDto extends PartialType(CreateOrganizationDto) {}
