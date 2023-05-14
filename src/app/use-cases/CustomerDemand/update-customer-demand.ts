import { Injectable } from '@nestjs/common'
import { CustomerDemandsRepository } from '@app/repositories/CustomerDemands/customer-demands-repository'
import { EntityIdNotProvidedError } from '../models/errors/entityIdNotProvided'
interface UpdateCustomerDemandRequest {
  customerDemandId: string
  customerId: string
  customerDemand: {
    customerIdToChange?: string
    name?: string
    description?: string
    endLine?: string
    designer?: string | null
    copywriter?: string | null
    readyToSend?: boolean
    readyToPost?: boolean
    posted?: boolean
  }
}

@Injectable()
export class UpdateCustomerDemand {
  constructor(private customerDemandRepository: CustomerDemandsRepository) {}

  async execute(request: UpdateCustomerDemandRequest): Promise<void> {
    if (!request.customerId || !request.customerDemandId) {
      throw new EntityIdNotProvidedError(
        !request.customerDemand ? 'Customer Demand' : 'Customer',
      )
    }

    await this.customerDemandRepository.update(
      request.customerDemandId,
      request.customerDemand,
    )
  }
}
