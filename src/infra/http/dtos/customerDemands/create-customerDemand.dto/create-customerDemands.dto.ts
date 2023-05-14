import { IsDate, IsString } from 'class-validator'

export class CreateCustomerDemandsDto {
  @IsString()
  customerId: string

  @IsString()
  name: string

  @IsString()
  description: string

  @IsDate()
  endLine: Date | null

  @IsString()
  designer: string | null

  @IsString()
  copywriter: string | null
}
