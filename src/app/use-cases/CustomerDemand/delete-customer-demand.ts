import { Injectable } from '@nestjs/common'
import { CustomerDemandsRepository } from '@app/repositories/CustomerDemands/customer-demands-repository'

interface DeleteCustomerDemandRequest {
  customerDemandId: string
  customerId: string
}

@Injectable()
export class DeleteCustomerDemand {
  constructor(private customerDemandRepository: CustomerDemandsRepository) {}

  async execute(request: DeleteCustomerDemandRequest): Promise<void> {
    await this.customerDemandRepository.delete(
      request.customerDemandId,
      request.customerId,
    )
  }
}
