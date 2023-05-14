import { CustomerDemand } from 'src/app/entities/CustomerDemands/customerDemands.entity'
import { ListCustomerDemandDto } from 'src/infra/http/dtos/customerDemands/list-customerDemand.dto/list-customerDemand.dto'
import { UpdateCustomerDemandsDto } from 'src/infra/http/dtos/customerDemands/update-customerDemand.dto/update-customerDemands.dto'

export abstract class CustomerDemandsRepository {
  abstract create(customerDemand: CustomerDemand): Promise<void>

  abstract list(customerId: string): Promise<ListCustomerDemandDto[]>

  abstract findById(customerDemandId: string): Promise<ListCustomerDemandDto>

  abstract update(
    customerDemandId: string,
    customerDemand: UpdateCustomerDemandsDto,
  ): Promise<void>

  abstract delete(customerDemandId: string, customerId: string): Promise<void>
}
