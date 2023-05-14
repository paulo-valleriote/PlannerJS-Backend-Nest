import { Injectable } from '@nestjs/common'
import { Customer } from '@app/entities/Customer/customer.entity'
import { CustomerRepository } from '@app/repositories/Customer/customer-repository'

interface CreateCustomerRequest {
  name: string
  externalInfoLink?: string
  activityField: string
  organizationId: string
}

@Injectable()
export class CreateCustomer {
  constructor(private customerDemandRepository: CustomerRepository) {}

  async execute(request: CreateCustomerRequest): Promise<Customer> {
    const customer = new Customer({
      ...request,
      externalInfoLink: request.externalInfoLink || '',
    })

    await this.customerDemandRepository.create(customer)

    return customer
  }
}
