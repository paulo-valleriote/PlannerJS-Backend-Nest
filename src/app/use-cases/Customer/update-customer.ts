import { Injectable } from '@nestjs/common'
import { CustomerRepository } from '@app/repositories/Customer/customer-repository'
import { EntityNotFound } from '../models/errors/entityNotFound'

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
  constructor(private customerRepository: CustomerRepository) {}

  async execute(request: UpdateCustomerRequest): Promise<void> {
    if (!request.id) {
      throw new EntityNotFound('Customer')
    }

    await this.customerRepository.update(request.id, {
      ...request.customer,
    })
  }
}
