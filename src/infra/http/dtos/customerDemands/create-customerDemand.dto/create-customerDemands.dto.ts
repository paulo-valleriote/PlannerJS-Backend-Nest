import { IsDate, IsString } from 'class-validator'

export class CreateCustomerDemandsDto {
  @IsString()
  readonly customerId: string

  @IsString()
  readonly name: string

  @IsString()
  readonly description: string

  @IsDate()
  readonly endLine: Date | null

  @IsString()
  readonly designer: string | null

  @IsString()
  readonly copywriter: string | null
}
