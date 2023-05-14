import { CreateCustomerDemand } from './create-customer-demand'
import { InMemoryCustomerDemandRepository } from '@test/repositories/in-memory-customer-demand-repository'
import { FindCustomerDemandById } from './find-customer-demand-by-id'

describe('Customer Demand', () => {
  it('should be able to find a demand by id', async () => {
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

    const findCustomerDemandById = new FindCustomerDemandById(
      customerDemandRepository,
    )

    const inMemoryCustomerDemand = await findCustomerDemandById.execute({
      customerDemandId: customerDemand.id,
    })

    expect(customerDemandRepository.customerDemands[0]).toEqual(
      inMemoryCustomerDemand,
    )
  })
})
