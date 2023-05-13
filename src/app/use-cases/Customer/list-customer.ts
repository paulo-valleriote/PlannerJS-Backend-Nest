import { Injectable } from '@nestjs/common'
import { Customer } from '../../../../src/app/entities/Customer/customer.entity'
import { CustomerRepository } from '../../../../src/app/repositories/Customer/customer-repository'

@Injectable()
export class ListCustomer {
  constructor(private customerDemandRepository: CustomerRepository) {}

  async execute(): Promise<Customer[]> {
    const customers = await this.customerDemandRepository.list()

    return customers
  }
}
