import { UsersRepository } from '../../repositories/User/users-repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DeleteUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: string): Promise<void> {
    const userId = request

    await this.usersRepository.deleteUser(userId)
  }
}
