import { ListUserDto } from 'src/infra/http/dtos/users/list-user.dto/list-user.dto'
import { User } from '../../../../../src/app/entities/User/user.entity'
import { UsersRepository } from '../../../../../src/app/repositories/User/users-repository'
import { PrismaService } from '../prisma.service'
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { UpdateUserDto } from 'src/infra/http/dtos/users/update-user.dto/update-user.dto'
import { UsersList } from '@infra/http/viewModel/usersList'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { LoginUserDto } from '@infra/http/dtos/users/login-user.dto/login-user.dto'
import { AuthUserDto } from '@infra/http/dtos/users/auth-user.dto/auth-user.dto'
@Injectable()
export class PrismaUserRepository implements UsersRepository {
  constructor(private prismaService: PrismaService) {}

  async register(user: User): Promise<void> {
    if (
      await this.prismaService.user.findUnique({
        where: { email: user.email },
      })
    ) {
      throw new BadRequestException('User already exists')
    }

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

  async login({ email, password }: LoginUserDto): Promise<AuthUserDto> {
    const user = await this.prismaService.user
      .findUnique({ where: { email } })
      .catch((err) => {
        throw new NotFoundException('User not found', { cause: err })
      })

    if (typeof user === null || !user?.password) {
      throw new BadRequestException('Email or Password was invalid')
    }

    const passwordIsValid = await compare(password, user.password)

    if (!passwordIsValid) {
      throw new BadRequestException('Email or Password was invalid')
    }

    const token = sign({ id: user.id }, 'secretKey')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userData } = user

    return {
      user: userData,
      token,
    }
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
