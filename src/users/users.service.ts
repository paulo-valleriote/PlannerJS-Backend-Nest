import { Injectable, NotFoundException } from '@nestjs/common'

@Injectable()
export class UsersService {
  private users = []

  findAll() {
    return this.users
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id)
  }

  create(createUserDTO: any) {
    this.users.push(createUserDTO)
  }

  update(id: string, updateUserDTO: any) {
    const userIndex = this.users.findIndex((user) => user.id === id)

    if (userIndex <= 0) {
      throw new NotFoundException(`User ${id} not found`)
    }

    this.users[userIndex] = updateUserDTO
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id)

    if (userIndex <= 0) {
      throw new NotFoundException(`User ${id} not found`)
    }

    this.users.splice(userIndex, 1)
  }
}
