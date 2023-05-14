import { Injectable } from '@nestjs/common'
import { CustomerRepository } from '@app/repositories/Customer/customer-repository'
import { EntityIdNotProvidedError } from '../models/errors/entityIdNotProvided'
@Injectable()
export class DeleteCustomer {
  constructor(private customerRepository: CustomerRepository) {}

  async execute(request: string): Promise<void> {
    const customerId = request

    if (!customerId) {
      throw new EntityIdNotProvidedError('Customer')
    }

    await this.customerRepository.delete(customerId)
  }
}
