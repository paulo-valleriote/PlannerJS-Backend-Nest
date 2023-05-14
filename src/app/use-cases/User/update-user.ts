import { UsersRepository } from '@app/repositories/User/users-repository'
import { Injectable } from '@nestjs/common'

interface UpdateUserRequest {
  id: string
  user: {
    name?: string
    role?: string
    email?: string
    password?: string
    admin?: boolean
    organizationId?: string
    customerDemandId?: string
  }
}

@Injectable()
export class UpdateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: UpdateUserRequest): Promise<void> {
    await this.usersRepository.update(request.id, {
      ...request.user,
    })
  }
}
