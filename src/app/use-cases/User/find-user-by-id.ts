import { UsersRepository } from '@app/repositories/User/users-repository'
import { PrismaUserMapper } from '@infra/database/prisma/mappers/prisma-user-mapper'
import { Injectable } from '@nestjs/common'
import { ListUserDto } from 'src/infra/http/dtos/users/list-user.dto/list-user.dto'

@Injectable()
export class FindUserById {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: string): Promise<ListUserDto> {
    const userId = request

    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new Error(`User ${userId} not found`)
    }

    return user
  }
}
