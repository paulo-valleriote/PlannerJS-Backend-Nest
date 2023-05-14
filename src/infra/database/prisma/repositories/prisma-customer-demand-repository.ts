import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'

import { UpdateCustomerDemandsDto } from '../../../../../src/infra/http/dtos/customerDemands/update-customerDemand.dto/update-customerDemands.dto'
import { CustomerDemandsRepository } from '../../../../app/repositories/CustomerDemands/customer-demands-repository'
import { CustomerDemand } from 'src/app/entities/CustomerDemands/customerDemands.entity'
import { ListCustomerDemandDto } from 'src/infra/http/dtos/customerDemands/list-customerDemand.dto/list-customerDemand.dto'

@Injectable()
export class PrismaCustomerDemandRepository
  implements CustomerDemandsRepository
{
  constructor(private prismaService: PrismaService) {}

  async create(customerDemand: CustomerDemand): Promise<void> {
    await this.prismaService.customerDemand.create({
      data: {
        id: customerDemand.id,
        name: customerDemand.name,
        description: customerDemand.description,
        copywriter: customerDemand.copywriter || '',
        designer: customerDemand.designer || '',
        createdAt: customerDemand.createdAt,
        endLine: customerDemand.endLine || '',
        readyToSend: customerDemand.readyToSend || false,
        readyToPost: customerDemand.readyToPost || false,
        posted: customerDemand.posted || false,
        customerId: customerDemand.customerId,
      },
    })
  }

  async update(
    customerDemandId: string,
    customerDemand: UpdateCustomerDemandsDto,
  ): Promise<void> {
    await this.prismaService.customerDemand.update({
      data: {
        name: customerDemand.name,
        description: customerDemand.description,
        copywriter: customerDemand.copywriter || '',
        designer: customerDemand.designer || '',
        endLine: customerDemand.endLine || '',
        readyToSend: customerDemand.readyToSend || false,
        readyToPost: customerDemand.readyToPost || false,
        posted: customerDemand.posted || false,
      },
      where: {
        id: customerDemandId,
      },
    })
  }

  async findById(customerDemandId: string): Promise<ListCustomerDemandDto> {
    const { ...customer } = await this.prismaService.customerDemand.findUnique({
      where: {
        id: customerDemandId,
      },
      include: {
        customer: true,
      },
    })

    if (!customer) {
      throw new Error(`Customer Demand ${customerDemandId} not found`)
    }

    return customer
  }

  async list(customerId: string): Promise<ListCustomerDemandDto[]> {
    const customerDemands = await this.prismaService.customerDemand.findMany({
      where: {
        customerId: customerId,
      },
    })

    if (customerDemands.length < 0) {
      throw new Error('Nothing was found')
    }

    return customerDemands
  }

  async delete(customerDemandId: string): Promise<void> {
    await this.prismaService.customerDemand.delete({
      where: { id: customerDemandId },
    })
  }
}
