import { Injectable } from '@nestjs/common'
import { Customer } from '../../../../src/app/entities/Customer/customer.entity'
import { CustomerRepository } from '../../../../src/app/repositories/Customer/customer-repository'

interface CreateCustomerRequest {
  name: string
  externalInfoLink: string
  activityField: string
  organizationId: string
}

@Injectable()
export class CreateCustomer {
  constructor(private customerDemandRepository: CustomerRepository) {}

  async execute(request: CreateCustomerRequest): Promise<Customer> {
    const customer = new Customer({
      ...request,
    })

    await this.customerDemandRepository.create(customer)

    return customer
  }
}
