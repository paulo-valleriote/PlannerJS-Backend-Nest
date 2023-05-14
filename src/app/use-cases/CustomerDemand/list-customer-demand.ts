import { Injectable } from '@nestjs/common'
import { CustomerDemandsRepository } from '@app/repositories/CustomerDemands/customer-demands-repository'
import { ListCustomerDemandDto } from '@infra/http/dtos/customerDemands/list-customerDemand.dto/list-customerDemand.dto'
import { EntityIdNotProvidedError } from '../models/errors/entityIdNotProvided'
import { EntityNotFound } from '../models/errors/entityNotFound'
@Injectable()
export class ListCustomerDemand {
  constructor(private customerDemandRepository: CustomerDemandsRepository) {}

  async execute(customerId: string): Promise<ListCustomerDemandDto[]> {
    if (!customerId) {
      throw new EntityIdNotProvidedError('Customer')
    }

    const customerDemands = await this.customerDemandRepository.list(customerId)

    if (customerDemands.length < 1) {
      throw new EntityNotFound('Customer Demands')
    }

    return customerDemands
  }
}
