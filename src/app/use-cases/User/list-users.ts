import { UsersRepository } from '@app/repositories/User/users-repository'
import { Injectable } from '@nestjs/common'
import { ListUserDto } from '@infra/http/dtos/users/list-user.dto/list-user.dto'

@Injectable()
export class ListUsers {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<ListUserDto[]> {
    const users = await this.usersRepository.list()

    if (users.length <= 0) {
      throw new Error('Nothing was found')
    }

    return users
  }
}
