import { InMemoryCustomerRepository } from '@test/repositories/in-memory-customers-repository'
import { CreateCustomer } from './create-customer'
import { UpdateCustomer } from './update-customer'

describe('Customer', () => {
  it('should be able to update a customer', async () => {
    const customersRepository = new InMemoryCustomerRepository()

    const createCustomer = new CreateCustomer(customersRepository)

    const initalCustomer = {
      name: 'test',
      activityField: 'test',
      externalInfoLink: 'test',
      organizationId: 'test',
    }

    const { id } = await createCustomer.execute(initalCustomer)

    const modifiedCustomer = {
      ...initalCustomer,
      name: 'modified test',
    }

    const updateCustomer = new UpdateCustomer(customersRepository)

    updateCustomer.execute({
      id,
      customer: modifiedCustomer,
    })

    expect(customersRepository.customers.length).toEqual(1)
    expect(
      customersRepository.customers[0].name === modifiedCustomer.name,
    ).toBeTruthy()
  })
})
