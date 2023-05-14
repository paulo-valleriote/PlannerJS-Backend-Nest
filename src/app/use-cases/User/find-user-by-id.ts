import { UsersRepository } from '@app/repositories/User/users-repository'
import { Injectable } from '@nestjs/common'
import { ListUserDto } from 'src/infra/http/dtos/users/list-user.dto/list-user.dto'
import { EntityIdNotProvidedError } from '../models/errors/entityIdNotProvided'
import { EntityNotFound } from '../models/errors/entityNotFound'

@Injectable()
export class FindUserById {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: string): Promise<ListUserDto> {
    const userId = request

    if (!userId) {
      throw new EntityIdNotProvidedError('User')
    }

    const user = await this.usersRepository.findById(userId)

    if (Object.values(user).length < 1) {
      throw new EntityNotFound('User')
    }

    return user
  }
}
