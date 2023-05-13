import { User } from 'src/app/entities/User/user.entity'
import { ListUserDto } from 'src/infra/http/dtos/users/list-user.dto/list-user.dto'

import { UpdateUserDto } from 'src/infra/http/dtos/users/update-user.dto/update-user.dto'

export abstract class UsersRepository {
  abstract create(user: User): Promise<void>

  abstract list(): Promise<ListUserDto[]>

  abstract findById(id: string): Promise<ListUserDto>

  abstract update(id: string, user: UpdateUserDto): Promise<void>

  abstract deleteUser(id: string): Promise<void>
}
