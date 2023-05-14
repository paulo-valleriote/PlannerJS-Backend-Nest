import { CustomerDemandsRepository } from 'src/app/repositories/CustomerDemands/customer-demands-repository'
import { CustomerDemand } from 'src/app/entities/CustomerDemands/customerDemands.entity'
import { ListCustomerDemandDto } from 'src/infra/http/dtos/customerDemands/list-customerDemand.dto/list-customerDemand.dto'
import { UpdateCustomerDemandsDto } from 'src/infra/http/dtos/customerDemands/update-customerDemand.dto/update-customerDemands.dto'

export class InMemoryCustomerDemandRepository
  implements CustomerDemandsRepository
{
  public customerDemands: CustomerDemand[] = []

  async create(customerDemand: CustomerDemand) {
    this.customerDemands.push(customerDemand)
  }

  async update(
    customerDemandId: string,
    customerDemand: UpdateCustomerDemandsDto,
  ): Promise<void> {
    const customerDemandIndex = this.customerDemands.findIndex(
      (inMemoryCustomerDemand) =>
        inMemoryCustomerDemand.id === customerDemandId,
    )

    if (customerDemandIndex < 0) {
      throw new Error('User not found')
    }

    Object.assign(this.customerDemands[customerDemandIndex], customerDemand)
  }

  async findById(customerDemandId: string): Promise<ListCustomerDemandDto> {
    const customerDemand = this.customerDemands.find(
      (customerInMemory) => customerInMemory.id === customerDemandId,
    )

    if (!customerDemand) {
      throw new Error('Customer Demand not found')
    }

    return customerDemand
  }

  async list(customerId: string): Promise<ListCustomerDemandDto[]> {
    const customerDemands = this.customerDemands.filter(
      (customerDemand) => customerDemand.customerId === customerId,
    )

    return customerDemands
  }

  async delete(customerDemandId: string, customerId: string): Promise<void> {
    const customerDemandIndex = this.customerDemands.findIndex(
      (inMemoryCustomer) =>
        inMemoryCustomer.id === customerDemandId &&
        inMemoryCustomer.customerId === customerId,
    )

    if (customerDemandIndex < 0) {
      throw new Error('UCustomer not found')
    }

    this.customerDemands.splice(customerDemandIndex, 1)
  }
}
