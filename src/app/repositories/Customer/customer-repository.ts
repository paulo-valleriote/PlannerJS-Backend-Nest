import { Customer } from 'src/app/entities/Customer/customer.entity'
import { UpdateCustomerDto } from 'src/infra/http/dtos/customers/update-customer.dto/update-customer.dto'

export abstract class CustomerRepository {
  abstract create(customer: Customer): Promise<void>

  abstract list(): Promise<Customer[]>

  abstract findById(id: string): Promise<Customer>

  abstract update(id: string, customerDemand: UpdateCustomerDto): Promise<void>

  abstract delete(id: string): Promise<void>
}
