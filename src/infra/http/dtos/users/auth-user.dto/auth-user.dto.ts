import { ListUserDto } from '../list-user.dto/list-user.dto'

export interface AuthUserDto {
  user: ListUserDto
  token: string
}
