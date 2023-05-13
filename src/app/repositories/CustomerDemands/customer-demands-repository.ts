import { CustomerDemand } from 'src/app/entities/CustomerDemands/customerDemands.entity'
import { UpdateCustomerDemandsDto } from 'src/infra/http/dtos/customerDemands/update-customerDemand.dto/update-customerDemands.dto'

export abstract class CustomerDemandsRepository {
  abstract create(customerDemand: CustomerDemand): Promise<void>

  abstract list(): Promise<CustomerDemand[]>

  abstract findById(id: string): Promise<CustomerDemand>

  abstract update(
    id: string,
    customerDemand: UpdateCustomerDemandsDto,
  ): Promise<void>

  abstract delete(id: string): Promise<void>
}
