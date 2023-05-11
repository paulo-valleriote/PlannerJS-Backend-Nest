import { Injectable, NotFoundException } from '@nestjs/common'
import { Customer } from './entities/customer.entity'

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: '1',
      name: 'John Doe',
      externalInfoLink: 'doc/bla/bla',
      activityField: 'foo bar',
      delayedPosts: 9,
      organizationId: '2',
      activeCampaigns: 2,
    },
  ]

  async findAll() {
    return this.customers
  }

  async findOne(id: string) {
    return this.customers.find((customer) => customer.id === id)
  }

  async create(createCustomerDto: any) {
    return this.customers.push(createCustomerDto)
  }

  async update(id: string, updateCustomerDto: any) {
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === id,
    )

    if (customerIndex <= 0) {
      throw new NotFoundException(`Customer ${id} not found`)
    }

    this.customers[customerIndex] = updateCustomerDto
  }

  async delete(id: string) {
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === id,
    )

    if (customerIndex <= 0) {
      throw new NotFoundException(`Customer ${id} not found`)
    }

    this.customers.splice(customerIndex, 1)
  }
}
