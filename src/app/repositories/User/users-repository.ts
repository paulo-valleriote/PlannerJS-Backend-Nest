import { AuthUserDto } from '@infra/http/dtos/users/auth-user.dto/auth-user.dto'
import { LoginUserDto } from '@infra/http/dtos/users/login-user.dto/login-user.dto'
import { User } from 'src/app/entities/User/user.entity'
import { ListUserDto } from 'src/infra/http/dtos/users/list-user.dto/list-user.dto'

import { UpdateUserDto } from 'src/infra/http/dtos/users/update-user.dto/update-user.dto'

export abstract class UsersRepository {
  abstract register(user: User): Promise<void>

  abstract login(userLoginData: LoginUserDto): Promise<AuthUserDto>

  abstract list(): Promise<ListUserDto[]>

  abstract findById(id: string): Promise<ListUserDto>

  abstract update(id: string, user: UpdateUserDto): Promise<void>

  abstract deleteUser(id: string): Promise<void>
}
