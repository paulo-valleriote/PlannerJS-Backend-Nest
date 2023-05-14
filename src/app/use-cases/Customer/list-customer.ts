import { Injectable } from '@nestjs/common'
import { Customer } from '@app/entities/Customer/customer.entity'
import { CustomerRepository } from '@app/repositories/Customer/customer-repository'
import { Replace } from 'src/helpers/Replace'

@Injectable()
export class ListCustomer {
  constructor(private customerDemandRepository: CustomerRepository) {}

  async execute(): Promise<Replace<Customer, { _id?: string } | Customer>[]> {
    const customers = await this.customerDemandRepository.list()

    return customers
  }
}
