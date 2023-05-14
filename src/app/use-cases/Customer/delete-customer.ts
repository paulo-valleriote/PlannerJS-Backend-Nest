import { Injectable } from '@nestjs/common'
import { CustomerRepository } from '@app/repositories/Customer/customer-repository'

@Injectable()
export class DeleteCustomer {
  constructor(private customerDemandRepository: CustomerRepository) {}

  async execute(request: string): Promise<void> {
    const customerId = request

    await this.customerDemandRepository.delete(customerId)
  }
}
