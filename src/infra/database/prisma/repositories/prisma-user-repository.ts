import { ListUserDto } from 'src/infra/http/dtos/users/list-user.dto/list-user.dto'
import { User } from '../../../../../src/app/entities/User/user.entity'
import { UsersRepository } from '../../../../../src/app/repositories/User/users-repository'
import { PrismaService } from '../prisma.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import { UpdateUserDto } from 'src/infra/http/dtos/users/update-user.dto/update-user.dto'
import { UsersList } from '@infra/http/viewModel/usersList'

@Injectable()
export class PrismaUserRepository implements UsersRepository {
  constructor(private prismaService: PrismaService) {}

  async create(user: User): Promise<void> {
    await this.prismaService.user.create({
      data: {
        id: user.id,
        name: user.name,
        role: user.role,
        email: user.email,
        password: user.password,
        admin: user.admin,
        createdAt: user.createdAt,
      },
    })
  }

  async update(id: string, user: UpdateUserDto): Promise<void> {
    await this.prismaService.user
      .update({
        data: {
          ...user,
        },
        where: {
          id,
        },
      })
      .catch((err) => {
        throw new NotFoundException(
          'Operation not found, update operation has been cancelled',
          { cause: err },
        )
      })
  }

  async findById(id: string): Promise<ListUserDto> {
    const { ...user } = await this.prismaService.user.findUnique({
      where: { id },
      include: {
        organization: true,
      },
    })

    if (!user) {
      throw new Error(`User ${id} not found`)
    }

    return new UsersList().toDetailedViewModel(user)
  }

  async list(): Promise<ListUserDto[]> {
    const users = await this.prismaService.user.findMany()

    if (users.length < 0) {
      throw new Error('Nothing was found')
    }

    return new UsersList().toGeneralViewModel(users)
  }

  async deleteUser(id: string): Promise<void> {
    await this.prismaService.user.delete({ where: { id } }).catch((err) => {
      throw new NotFoundException(
        'User not found, delete operation has been cancelled',
        { cause: err },
      )
    })
  }
}
