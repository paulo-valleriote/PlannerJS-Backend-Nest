import { Customer } from './customer.entity'

describe('Customer', () => {
  it('should be able to create a new customer with required fields', () => {
    const customer = new Customer({
      name: 'test',
      activityField: 'test',
      externalInfoLink: 'test',
      organizationId: '1',
    })

    expect(Object.values(customer)).toBeTruthy()
  })

  it('should be able to create a new customer with all fields filled', () => {
    const customer = new Customer({
      name: 'test',
      activityField: 'test',
      externalInfoLink: 'test',
      organizationId: '1',
      activeCampaigns: 0,
      delayedPosts: 2,
      createdAt: new Date('08/04/2023'),
    })

    expect(Object.values(customer)).toBeTruthy()
  })

  it('should be able to create a new customer without external infos link', () => {
    const customer = new Customer({
      name: 'test',
      activityField: 'test',
      externalInfoLink: null,
      organizationId: '1',
    })

    expect(customer.externalInfoLink).toEqual(null)
  })
})
