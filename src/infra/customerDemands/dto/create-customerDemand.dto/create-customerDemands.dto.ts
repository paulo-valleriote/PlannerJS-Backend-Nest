import { IsDate, IsString } from 'class-validator'

export class CreateCustomerDemandsDto {
  @IsString()
  readonly customer: string

  @IsString()
  readonly name: string

  @IsString()
  readonly caption: string

  @IsDate()
  readonly endLine: Date

  @IsString()
  readonly designer: string

  @IsString()
  readonly copywriter: string
}
