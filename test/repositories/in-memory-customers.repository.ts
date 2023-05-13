import { CustomerRepository } from '../../src/app/repositories/Customer/customer-repository'
import { Customer } from '../../src/app/entities/Customer/customer.entity'
import { UpdateCustomerDto } from '../../src/infra/http/dtos/customers/update-customer.dto/update-customer.dto'

export class InMemoryCustomerRepository implements CustomerRepository {
  public customers: Customer[] = []

  async create(customer: Customer) {
    this.customers.push(customer)
  }

  async update(id: string, customer: UpdateCustomerDto): Promise<void> {
    const customerIndex = this.customers.findIndex(
      (inMemoryCustomer) => inMemoryCustomer.id === id,
    )

    if (customerIndex < 0) {
      throw new Error('User not found')
    }

    Object.assign(this.customers[customerIndex], customer)
  }

  async findById(id: string): Promise<Customer> {
    const customer = this.customers.find(
      (customerInMemory) => customerInMemory.id === id,
    )

    if (!customer) {
      throw new Error('Customer not found')
    }

    return customer
  }

  async list(): Promise<Customer[]> {
    return this.customers
  }

  async delete(id: string): Promise<void> {
    const customerIndex = this.customers.findIndex(
      (inMemoryCustomer) => inMemoryCustomer.id === id,
    )

    if (customerIndex < 0) {
      throw new Error('UCustomer not found')
    }

    this.customers.splice(customerIndex, 1)
  }
}
