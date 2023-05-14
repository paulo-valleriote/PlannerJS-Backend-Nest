import { InMemoryCustomerRepository } from '@test/repositories/in-memory-customers-repository'
import { CreateCustomer } from './create-customer'

describe('Customer', () => {
  it('should be able to create a new customer', async () => {
    const customersRepository = new InMemoryCustomerRepository()

    const createCustomer = new CreateCustomer(customersRepository)

    const customer = await createCustomer.execute({
      name: 'test',
      activityField: 'test',
      externalInfoLink: 'test',
      organizationId: 'test',
    })

    expect(customersRepository.customers.length).toBeGreaterThanOrEqual(1)
    expect(customersRepository.customers[0]).toEqual(customer)
  })
})
