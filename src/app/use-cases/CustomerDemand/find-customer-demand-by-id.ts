import { Injectable } from '@nestjs/common'
import { CustomerDemandsRepository } from '@app/repositories/CustomerDemands/customer-demands-repository'
import { ListCustomerDemandDto } from '@infra/http/dtos/customerDemands/list-customerDemand.dto/list-customerDemand.dto'

interface FindCustomerDemandRequest {
  customerDemandId: string
}
@Injectable()
export class FindCustomerDemandById {
  constructor(private customerDemandRepository: CustomerDemandsRepository) {}

  async execute(
    request: FindCustomerDemandRequest,
  ): Promise<ListCustomerDemandDto> {
    const customerDemand = await this.customerDemandRepository.findById(
      request.customerDemandId,
    )

    return customerDemand
  }
}
