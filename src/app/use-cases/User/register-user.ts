import { User } from '@app/entities/User/user.entity'
import { UsersRepository } from '@app/repositories/User/users-repository'
import { Injectable } from '@nestjs/common'

interface RegisterUserRequest {
  name: string
  role: string
  email: string
  password: string
  admin: boolean
}

@Injectable()
export class RegisterUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: RegisterUserRequest): Promise<User> {
    const { admin, email, name, password, role } = request

    const user = new User({
      name,
      role,
      email,
      password,
      admin,
    })

    await this.usersRepository.register(user)

    return user
  }
}
