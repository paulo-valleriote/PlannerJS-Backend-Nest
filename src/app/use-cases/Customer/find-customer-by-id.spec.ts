import { InMemoryCustomerRepository } from '../../../../test/repositories/in-memory-customers.repository'
import { CreateCustomer } from './create-customer'
import { FindCustomerById } from './find-customer-by-id'

describe('Customer', () => {
  it('should be able to find a pre existing customer by id', async () => {
    const customersRepository = new InMemoryCustomerRepository()

    const createCustomer = new CreateCustomer(customersRepository)

    const customer = await createCustomer.execute({
      name: 'test',
      activityField: 'test',
      externalInfoLink: 'test',
      organizationId: 'test',
    })

    const findCustomerById = new FindCustomerById(customersRepository)

    const inMemoryCustomer = await findCustomerById.execute(customer.id)

    expect(customer).toEqual(inMemoryCustomer)
    expect(Object.values(inMemoryCustomer)).toBeTruthy()
  })
})
