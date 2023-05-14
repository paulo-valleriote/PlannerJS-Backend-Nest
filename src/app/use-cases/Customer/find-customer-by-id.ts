import { Injectable } from '@nestjs/common'
import { Customer } from '@app/entities/Customer/customer.entity'
import { CustomerRepository } from '@app/repositories/Customer/customer-repository'
import { Replace } from 'src/helpers/Replace'

@Injectable()
export class FindCustomerById {
  constructor(private customerDemandRepository: CustomerRepository) {}

  async execute(
    request: string,
  ): Promise<Replace<Customer, { _id?: string } | Customer>> {
    const customerId = request

    const customer = await this.customerDemandRepository.findById(customerId)

    return customer
  }
}
