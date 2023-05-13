import { Injectable } from '@nestjs/common'
import { randomUUID, createHash } from 'crypto'
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

  async findOneWithRelations(id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
      include: { organization: true },
    })
  }

  async create(createUserDTO: any) {
    await this.prisma.user.create({
      data: {
        id: randomUUID(),
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
