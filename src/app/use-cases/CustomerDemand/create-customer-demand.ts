import { Injectable } from '@nestjs/common'
import { CustomerDemand } from 'src/app/entities/CustomerDemands/customerDemands.entity'
import { CustomerDemandsRepository } from 'src/app/repositories/CustomerDemands/customer-demands-repository'

interface CreateCustomerDemandRequest {
  customerId: string
  name: string
  description: string
  endLine: Date | null
  designer: string | null
  copywriter: string | null
}

@Injectable()
export class CreateCustomerDemand {
  constructor(private customerDemandRepository: CustomerDemandsRepository) {}

  async execute(request: CreateCustomerDemandRequest): Promise<CustomerDemand> {
    const customerDemand = new CustomerDemand({
      ...request,
    })

    await this.customerDemandRepository.create(customerDemand)

    return customerDemand
  }
}
