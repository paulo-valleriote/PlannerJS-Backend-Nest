import { Injectable } from '@nestjs/common'
import { Customer } from '@app/entities/Customer/customer.entity'
import { CustomerRepository } from '@app/repositories/Customer/customer-repository'
import { Replace } from 'src/helpers/Replace'
import { EntityNotFound } from '../models/errors/entityNotFound'
@Injectable()
export class ListCustomer {
  constructor(private customerRepository: CustomerRepository) {}

  async execute(): Promise<Replace<Customer, { _id?: string } | Customer>[]> {
    const customers = await this.customerRepository.list()

    if (customers.length < 1) {
      throw new EntityNotFound('Customer')
    }

    return customers
  }
}
