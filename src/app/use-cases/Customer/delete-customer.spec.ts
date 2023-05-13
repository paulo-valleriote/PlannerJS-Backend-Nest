import { InMemoryCustomerRepository } from '../../../../test/repositories/in-memory-customers.repository'
import { CreateCustomer } from './create-customer'
import { DeleteCustomer } from './delete-customer'

describe('Customer', () => {
  it('should be able to delete an pre-existing customer', async () => {
    const customersRepository = new InMemoryCustomerRepository()

    const createCustomer = new CreateCustomer(customersRepository)

    const customer = await createCustomer.execute({
      name: 'test',
      activityField: 'test',
      externalInfoLink: 'test',
      organizationId: 'test',
    })

    expect(customersRepository.customers.includes(customer)).toBeTruthy()

    const deleteCustomer = new DeleteCustomer(customersRepository)

    await deleteCustomer.execute(customer.id)

    expect(customersRepository.customers.length).toBeLessThanOrEqual(0)
    expect(customersRepository.customers.includes(customer)).toBeFalsy()
  })
})
