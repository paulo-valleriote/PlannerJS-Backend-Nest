import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.user.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({ where: { id } })
  }

  async create(createUserDTO: any) {
    await this.prisma.user.create({
      data: {
        ...createUserDTO,
      },
    })
  }

  async update(id: string, updateUserDTO: any) {
    await this.prisma.user.update({
      data: {
        ...updateUserDTO,
      },
      where: { id },
    })
  }

  async remove(id: string) {
    await this.prisma.user.delete({ where: { id } })
  }
}
