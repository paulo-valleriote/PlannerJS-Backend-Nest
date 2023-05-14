import { CreateCustomerDemand } from './create-customer-demand'
import { InMemoryCustomerDemandRepository } from '@test/repositories/in-memory-customer-demand-repository'
import { UpdateCustomerDemand } from './update-customer-demand'

describe('Customer Demand', () => {
  it('should be able to find a demand by id', async () => {
    const customerDemandRepository = new InMemoryCustomerDemandRepository()

    const createCustomerDemand = new CreateCustomerDemand(
      customerDemandRepository,
    )

    const customerDemand = {
      name: 'test demand',
      description: 'test demand description',
      copywriter: null,
      designer: null,
      endLine: new Date(),
      customerId: '2',
    }

    await createCustomerDemand.execute(customerDemand)

    const modifiedCustomerDemand = {
      ...customerDemand,
      name: 'updated test demand',
    }

    const updateCustomerDemand = new UpdateCustomerDemand(
      customerDemandRepository,
    )

    await updateCustomerDemand.execute({
      customerDemandId: customerDemandRepository.customerDemands[0].id,
      customerId: customerDemand.customerId,
      customerDemand: modifiedCustomerDemand,
    })

    expect(
      customerDemandRepository.customerDemands[0].name ===
        modifiedCustomerDemand.name,
    ).toBeTruthy()
  })
})
