import { UsersRepository } from '@app/repositories/User/users-repository'
import { AuthUserDto } from '@infra/http/dtos/users/auth-user.dto/auth-user.dto'
import { Injectable } from '@nestjs/common'

interface LoginUserRequest {
  email: string
  password: string
}

@Injectable()
export class LoginUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: LoginUserRequest): Promise<AuthUserDto> {
    const { email, password } = request

    const authUserData = await this.usersRepository.login({
      email: email,
      password: password,
    })

    return authUserData
  }
}
