import { Injectable } from '@nestjs/common'
import { CustomerDemand } from 'src/app/entities/CustomerDemands/customerDemands.entity'
import { CustomerDemandsRepository } from 'src/app/repositories/CustomerDemands/customer-demands-repository'

@Injectable()
export class ListCustomerDemand {
  constructor(private customerDemandRepository: CustomerDemandsRepository) {}

  async execute(): Promise<CustomerDemand[]> {
    const customerDemands = await this.customerDemandRepository.list()

    return customerDemands
  }
}
