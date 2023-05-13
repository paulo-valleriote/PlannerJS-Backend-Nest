import { Injectable } from '@nestjs/common'
import { CustomerDemandsRepository } from 'src/app/repositories/CustomerDemands/customer-demands-repository'

@Injectable()
export class DeleteCustomerDemand {
  constructor(private customerDemandRepository: CustomerDemandsRepository) {}

  async execute(request: string): Promise<void> {
    const customerDemandId = request

    await this.customerDemandRepository.delete(customerDemandId)
  }
}
