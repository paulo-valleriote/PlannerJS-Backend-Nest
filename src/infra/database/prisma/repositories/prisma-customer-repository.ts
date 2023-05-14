import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'

import { CustomerRepository } from 'src/app/repositories/Customer/customer-repository'
import { Customer } from 'src/app/entities/Customer/customer.entity'
import { Replace } from 'src/helpers/Replace'
import { UpdateCustomerDto } from 'src/infra/http/dtos/customers/update-customer.dto/update-customer.dto'

@Injectable()
export class PrismaCustomerRepository implements CustomerRepository {
  constructor(private prismaService: PrismaService) {}

  async create(customer: Customer): Promise<void> {
    await this.prismaService.customer.create({
      data: {
        id: customer.id,
        name: customer.name,
        externalInfoLink: customer.externalInfoLink || '',
        organizationId: customer.organizationId,
        activityField: customer.activityField,
        activeCampaigns: customer.activeCampaigns || 0,
      },
    })
  }

  async update(id: string, customer: UpdateCustomerDto): Promise<void> {
    await this.prismaService.customer.update({
      data: {
        ...customer,
      },
      where: {
        id,
      },
    })
  }

  async findById(id: string): Promise<Replace<Customer, { _id?: string }>> {
    const { ...customer } = await this.prismaService.customer.findUnique({
      where: { id },
      include: {
        currentOrganization: true,
        customerDemands: true,
      },
    })

    if (!customer) {
      throw new Error(`Customer ${id} not found`)
    }

    return customer
  }

  async list(): Promise<Replace<Customer, { _id?: string }>[]> {
    const customers = await this.prismaService.customer.findMany()

    if (customers.length < 0) {
      throw new Error('Nothing was found')
    }

    return customers
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.customer.delete({ where: { id } })
  }
}
