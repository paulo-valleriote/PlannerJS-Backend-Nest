import { Injectable } from '@nestjs/common'
import { CustomerDemandsRepository } from 'src/app/repositories/CustomerDemands/customer-demands-repository'

interface UpdateCustomerDemandRequest {
  id: string
  customerDemand: {
    name?: string
    description?: string
    endLine?: Date | null
    designer?: string | null
    copywriter?: string | null
    readyToSend?: boolean | undefined
    readyToPost?: boolean | undefined
    posted?: boolean | undefined
  }
}

@Injectable()
export class UpdateCustomerDemand {
  constructor(private customerDemandRepository: CustomerDemandsRepository) {}

  async execute(request: UpdateCustomerDemandRequest): Promise<void> {
    await this.customerDemandRepository.update(
      request.id,
      request.customerDemand,
    )
  }
}
