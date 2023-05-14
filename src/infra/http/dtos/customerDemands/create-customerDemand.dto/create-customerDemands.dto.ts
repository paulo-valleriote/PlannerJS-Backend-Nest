import { IsString } from 'class-validator'

export class CreateCustomerDemandsDto {
  @IsString()
  customerId: string

  @IsString()
  userId: string

  @IsString()
  name: string

  @IsString()
  description: string

  @IsString()
  endLine: string

  @IsString()
  designer: string

  @IsString()
  copywriter: string
}
