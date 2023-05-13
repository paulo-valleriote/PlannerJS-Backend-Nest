import { Injectable } from '@nestjs/common'
import { CustomerDemand } from 'src/app/entities/CustomerDemands/customerDemands.entity'
import { CustomerDemandsRepository } from 'src/app/repositories/CustomerDemands/customer-demands-repository'

@Injectable()
export class FindCustomerDemandById {
  constructor(private customerDemandRepository: CustomerDemandsRepository) {}

  async execute(request: string): Promise<CustomerDemand> {
    const customerDemandId = request

    const customerDemand = await this.customerDemandRepository.findById(
      customerDemandId,
    )

    return customerDemand
  }
}
