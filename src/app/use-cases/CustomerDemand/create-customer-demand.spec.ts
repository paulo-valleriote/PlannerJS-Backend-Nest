import { CreateCustomerDemand } from './create-customer-demand'
import { InMemoryCustomerDemandRepository } from '@test/repositories/in-memory-customer-demand-repository'

describe('Customer Demand', () => {
  it('should be able to create a new demand', async () => {
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

    expect(
      customerDemandRepository.customerDemands.length,
    ).toBeGreaterThanOrEqual(1)
    expect(customerDemandRepository.customerDemands[0]).toEqual(customerDemand)
  })
})
