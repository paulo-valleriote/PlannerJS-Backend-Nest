import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class CustomerDemandsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.customerDemand.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.customerDemand.findUnique({ where: { id } })
  }

  async create(createCustomerDemandDTO: any) {
    await this.prisma.customerDemand.create({
      data: {
        ...createCustomerDemandDTO,
      },
    })
  }

  async update(id: string, updateCustomerDemandDTO: any) {
    await this.prisma.customerDemand.update({
      data: {
        ...updateCustomerDemandDTO,
      },
      where: { id },
    })
  }

  async remove(id: string) {
    await this.prisma.customerDemand.delete({ where: { id } })
  }
}
