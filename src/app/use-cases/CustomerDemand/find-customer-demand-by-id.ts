import { Injectable } from '@nestjs/common'
import { CustomerDemandsRepository } from '@app/repositories/CustomerDemands/customer-demands-repository'
import { ListCustomerDemandDto } from '@infra/http/dtos/customerDemands/list-customerDemand.dto/list-customerDemand.dto'
import { EntityIdNotProvidedError } from '../models/errors/entityIdNotProvided'
import { EntityNotFound } from '../models/errors/entityNotFound'

interface FindCustomerDemandRequest {
  customerDemandId: string
}
@Injectable()
export class FindCustomerDemandById {
  constructor(private customerDemandRepository: CustomerDemandsRepository) {}

  async execute(
    request: FindCustomerDemandRequest,
  ): Promise<ListCustomerDemandDto> {
    if (!request.customerDemandId) {
      throw new EntityIdNotProvidedError('Customer Demand')
    }

    const customerDemand = await this.customerDemandRepository.findById(
      request.customerDemandId,
    )

    if (Object.values(customerDemand).length < 1) {
      throw new EntityNotFound('Customer Demand')
    }

    return customerDemand
  }
}
