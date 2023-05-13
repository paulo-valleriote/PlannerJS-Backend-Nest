import { Organization } from './organization.entity'

describe('Organization', () => {
  it('should be able to create a new organization', () => {
    const organization = new Organization({
      name: 'Test Organization',
      email: 'test@example.com',
      password: 'test',
    })

    expect(Object.values(organization)).toBeTruthy()
  })

  it('should be able to destructuring an organization object', () => {
    const organization = new Organization({
      name: 'Test Organization',
      email: 'test@example.com',
      password: 'test',
    })

    const { name, email, password } = organization

    expect([name, email, password]).toBeTruthy()
  })

  it('should be able to use getters', () => {
    const organization = new Organization({
      name: 'Test Organization',
      email: 'test@example.com',
      password: 'test',
    })

    const creationDate = organization.createdAt
    const organizationId = organization.id

    expect([creationDate, organizationId]).toBeTruthy()
  })
})
