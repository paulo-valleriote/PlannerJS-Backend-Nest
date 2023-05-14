import { CreateCustomerDemand } from './create-customer-demand'
import { InMemoryCustomerDemandRepository } from '@test/repositories/in-memory-customer-demand-repository'
import { DeleteCustomerDemand } from './delete-customer-demand'

describe('Customer Demand', () => {
  it('should be able to delete an pre existing demand', async () => {
    const customerDemandRepository = new InMemoryCustomerDemandRepository()

    const createCustomerDemand = new CreateCustomerDemand(
      customerDemandRepository,
    )

    const customerDemand = await createCustomerDemand.execute({
      name: 'test demand',
      description: 'test demand description',
      copywriter: null,
      designer: null,
      endLine: new Date(),
      customerId: '2',
    })

    const deleteCustomerDemand = new DeleteCustomerDemand(
      customerDemandRepository,
    )

    deleteCustomerDemand.execute({
      customerDemandId: customerDemand.id,
      customerId: customerDemand.customerId,
    })

    expect(customerDemandRepository.customerDemands.length).toEqual(0)
    expect(
      customerDemandRepository.customerDemands.includes(customerDemand),
    ).toBeFalsy()
  })
})
