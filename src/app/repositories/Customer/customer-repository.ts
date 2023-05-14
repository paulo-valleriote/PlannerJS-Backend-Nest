import { Customer } from 'src/app/entities/Customer/customer.entity'
import { Replace } from 'src/helpers/Replace'
import { UpdateCustomerDto } from 'src/infra/http/dtos/customers/update-customer.dto/update-customer.dto'

export abstract class CustomerRepository {
  abstract create(customer: Customer): Promise<void>

  abstract list(): Promise<Replace<Customer, { _id?: string } | Customer>[]>

  abstract findById(
    id: string,
  ): Promise<Replace<Customer, { _id?: string } | Customer>>

  abstract update(id: string, customerDemand: UpdateCustomerDto): Promise<void>

  abstract delete(id: string): Promise<void>
}
