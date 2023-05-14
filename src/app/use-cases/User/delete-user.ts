import { UsersRepository } from '@app/repositories/User/users-repository'
import { Injectable } from '@nestjs/common'
import { EntityIdNotProvidedError } from '../models/errors/entityIdNotProvided'

@Injectable()
export class DeleteUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: string): Promise<void> {
    const userId = request

    if (!userId) {
      throw new EntityIdNotProvidedError('User')
    }

    await this.usersRepository.deleteUser(userId)
  }
}
