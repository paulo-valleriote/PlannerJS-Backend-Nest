import { Injectable } from '@nestjs/common'
import { CustomerDemandsRepository } from '@app/repositories/CustomerDemands/customer-demands-repository'
import { ListCustomerDemandDto } from '@infra/http/dtos/customerDemands/list-customerDemand.dto/list-customerDemand.dto'

@Injectable()
export class ListCustomerDemand {
  constructor(private customerDemandRepository: CustomerDemandsRepository) {}

  async execute(customerId: string): Promise<ListCustomerDemandDto[]> {
    const customerDemands = await this.customerDemandRepository.list(customerId)

    return customerDemands
  }
}
