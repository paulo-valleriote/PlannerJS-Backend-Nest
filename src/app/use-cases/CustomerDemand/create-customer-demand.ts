import { Injectable } from '@nestjs/common'
import { CustomerDemand } from '@app/entities/CustomerDemands/customerDemands.entity'
import { CustomerDemandsRepository } from '@app/repositories/CustomerDemands/customer-demands-repository'

interface CreateCustomerDemandRequest {
  customerId: string
  name: string
  description: string
  endLine: string | null
  designer: string | null
  copywriter: string | null
  userId: string
}

@Injectable()
export class CreateCustomerDemand {
  constructor(private customerDemandRepository: CustomerDemandsRepository) {}

  async execute(request: CreateCustomerDemandRequest): Promise<CustomerDemand> {
    const customerDemand = new CustomerDemand({
      ...request,
      endLine: request.endLine || null,
    })

    await this.customerDemandRepository.create(customerDemand)

    return customerDemand
  }
}
