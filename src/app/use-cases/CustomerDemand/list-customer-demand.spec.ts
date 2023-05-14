import { CreateCustomerDemand } from './create-customer-demand'
import { InMemoryCustomerDemandRepository } from '@test/repositories/in-memory-customer-demand-repository'
import { ListCustomerDemand } from './list-customer-demand'

describe('Customer Demand', () => {
  it('should be able to find all customer demands', async () => {
    const customerDemandRepository = new InMemoryCustomerDemandRepository()

    const createCustomerDemand = new CreateCustomerDemand(
      customerDemandRepository,
    )

    for (let i = 0; i < 5; i++) {
      await createCustomerDemand.execute({
        name: `test demand ${i}`,
        description: `description for test demand ${i}`,
        copywriter: `copy ${i}`,
        designer: `designer ${i}`,
        endLine: new Date(),
        customerId: `${Math.floor(i / 2)}`,
      })
    }

    const listCustomerDemands = new ListCustomerDemand(customerDemandRepository)

    const inMemoryCustomerDemands = await listCustomerDemands.execute('0')

    const demandsOfAnCustomer = customerDemandRepository.customerDemands.filter(
      (demands) => demands.customerId === '0',
    )

    expect(demandsOfAnCustomer.length).toEqual(2)
    expect(inMemoryCustomerDemands.length).toBeGreaterThanOrEqual(2)
  })
})
