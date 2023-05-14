import { Injectable } from '@nestjs/common'
import { CustomerRepository } from '@app/repositories/Customer/customer-repository'

interface UpdateCustomerRequest {
  id: string
  customer: {
    name?: string
    externalInfoLink?: string
    activityField?: string
    organizationId?: string
  }
}

@Injectable()
export class UpdateCustomer {
  constructor(private customerDemandRepository: CustomerRepository) {}

  async execute(request: UpdateCustomerRequest): Promise<void> {
    await this.customerDemandRepository.update(request.id, {
      ...request.customer,
    })
  }
}
