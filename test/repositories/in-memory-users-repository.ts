import { UpdateUserDto } from 'src/infra/http/dtos/users/update-user.dto/update-user.dto'
import { User } from '../../src/app/entities/User/user.entity'
import { UsersRepository } from '../../src/app/repositories/User/users-repository'
import { ListUserDto } from 'src/infra/http/dtos/users/list-user.dto/list-user.dto'

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = []

  async create(user: User) {
    this.users.push(user)
  }

  async update(id: string, user: UpdateUserDto): Promise<void> {
    const userIndex = this.users.findIndex(
      (inMemoryUser) => inMemoryUser.id === id,
    )

    if (userIndex < 0) {
      throw new Error('User not found')
    }

    Object.assign(this.users[userIndex], user)
  }

  async findById(id: string): Promise<ListUserDto> {
    const user = this.users.find((userInMemory) => userInMemory.id === id)

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  async list(): Promise<ListUserDto[]> {
    return this.users
  }

  async deleteUser(id: string): Promise<void> {
    const userIndex = this.users.findIndex(
      (inMemoryUser) => inMemoryUser.id === id,
    )

    if (userIndex < 0) {
      throw new Error('User not found')
    }

    this.users.splice(userIndex, 1)
  }
}
