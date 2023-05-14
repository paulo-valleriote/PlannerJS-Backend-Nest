import { Injectable } from '@nestjs/common'
import { Customer } from '@app/entities/Customer/customer.entity'
import { CustomerRepository } from '@app/repositories/Customer/customer-repository'
import { Replace } from 'src/helpers/Replace'
import { EntityIdNotProvidedError } from '../models/errors/entityIdNotProvided'
import { EntityNotFound } from '../models/errors/entityNotFound'
@Injectable()
export class FindCustomerById {
  constructor(private customerRepository: CustomerRepository) {}

  async execute(
    request: string,
  ): Promise<Replace<Customer, { _id?: string } | Customer>> {
    const customerId = request

    if (!customerId) {
      throw new EntityIdNotProvidedError('Customer')
    }

    const customer = await this.customerRepository.findById(customerId)

    if (Object.values(customer).length < 1) {
      throw new EntityNotFound('Customer')
    }

    return customer
  }
}
