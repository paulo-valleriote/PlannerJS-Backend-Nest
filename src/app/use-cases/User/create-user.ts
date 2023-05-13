import { User } from '../../entities/User/user.entity'
import { UsersRepository } from '../../repositories/User/users-repository'
import { Injectable } from '@nestjs/common'

interface CreateUserRequest {
  name: string
  role: string
  email: string
  password: string
  admin: boolean
}

@Injectable()
export class CreateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: CreateUserRequest): Promise<User> {
    const { admin, email, name, password, role } = request

    const user = new User({
      name,
      role,
      email,
      password,
      admin,
    })

    await this.usersRepository.create(user)

    return user
  }
}
