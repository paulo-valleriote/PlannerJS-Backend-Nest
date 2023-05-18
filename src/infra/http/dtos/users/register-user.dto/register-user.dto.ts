import { IsBoolean, IsString } from 'class-validator'

export class RegisterUserDto {
  @IsString()
  name: string
  @IsString()
  role: string
  @IsString()
  email: string
  @IsString()
  password: string
  @IsBoolean()
  admin: boolean
}
