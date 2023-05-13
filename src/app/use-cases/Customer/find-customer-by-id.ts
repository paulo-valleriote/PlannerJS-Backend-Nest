import { Injectable } from '@nestjs/common'
import { Customer } from 'src/app/entities/Customer/customer.entity'
import { CustomerRepository } from 'src/app/repositories/Customer/customer-repository'

@Injectable()
export class FindCustomerById {
  constructor(private customerDemandRepository: CustomerRepository) {}

  async execute(request: string): Promise<Customer> {
    const customerId = request

    const customer = await this.customerDemandRepository.findById(customerId)

    return customer
  }
}
