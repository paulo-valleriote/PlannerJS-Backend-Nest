import { Injectable } from '@nestjs/common'
import { CustomerDemandsRepository } from '@app/repositories/CustomerDemands/customer-demands-repository'
import { EntityIdNotProvidedError } from '../models/errors/entityIdNotProvided'

interface DeleteCustomerDemandRequest {
  customerDemandId: string
  customerId: string
}

@Injectable()
export class DeleteCustomerDemand {
  constructor(private customerDemandRepository: CustomerDemandsRepository) {}

  async execute(request: DeleteCustomerDemandRequest): Promise<void> {
    if (!request.customerId) {
      throw new EntityIdNotProvidedError('Customer')
    }

    await this.customerDemandRepository.delete(
      request.customerDemandId,
      request.customerId,
    )
  }
}
