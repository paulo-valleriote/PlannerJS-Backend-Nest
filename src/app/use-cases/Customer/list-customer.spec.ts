import { InMemoryCustomerRepository } from '@test/repositories/in-memory-customers-repository'
import { CreateCustomer } from './create-customer'

describe('Customer', () => {
  it('should be able to list all customers', async () => {
    const customersRepository = new InMemoryCustomerRepository()

    const createCustomer = new CreateCustomer(customersRepository)

    for (let i = 0; i <= 4; i++) {
      await createCustomer.execute({
        name: 'test',
        activityField: 'test',
        externalInfoLink: 'test',
        organizationId: 'test',
      })
    }

    expect(customersRepository.customers.length).toBeGreaterThanOrEqual(5)
  })
})
