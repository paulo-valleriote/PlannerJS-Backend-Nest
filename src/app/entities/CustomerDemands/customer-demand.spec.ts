import { CustomerDemand } from './customerDemands.entity'

describe('Customer Demand', () => {
  it('should be able to create a customer demand with all required values', () => {
    const customerDemand = new CustomerDemand({
      customerId: '1',
      name: 'test',
      description: 'test',
      copywriter: 'test',
      designer: 'test',
      endLine: new Date(),
    })

    expect(Object.values(customerDemand)).toBeTruthy()
  })

  it('should be able to create a customer demand with null option information', () => {
    const customerDemand = new CustomerDemand({
      customerId: '1',
      name: 'test',
      description: 'test',
      copywriter: null,
      designer: null,
      endLine: null,
    })

    expect(customerDemand.copywriter).toEqual(null)
  })
})
