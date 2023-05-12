import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.customer.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.customer.findUnique({ where: { id } })
  }

  async create(createCustomerDto: any) {
    await this.prisma.customer.create({
      data: {
        ...createCustomerDto,
      },
    })
  }

  async update(id: string, updateCustomerDto: any) {
    await this.prisma.customer.update({
      data: {
        ...updateCustomerDto,
      },
      where: {
        id,
      },
    })
  }

  async delete(id: string) {
    await this.prisma.customer.delete({ where: { id } })
  }
}
