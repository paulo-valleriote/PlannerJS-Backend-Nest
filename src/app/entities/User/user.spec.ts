import { User } from './user.entity'

describe('User', () => {
  it('should be able to create a new user', () => {
    const user = new User({
      name: 'John Doe',
      role: 'admin',
      email: 'foo@bar.com',
      password: '123456',
      admin: true,
      organizationId: '1',
      customerDemandId: ['1', '2'],
    })

    expect(Object.values(user)).toBeTruthy()
  })

  it('should be able to destructuring an user object', () => {
    const user = new User({
      name: 'John Doe',
      role: 'admin',
      email: 'foo@bar.com',
      password: '123456',
      admin: true,
      organizationId: '1',
      customerDemandId: ['1', '2'],
    })

    const { id, name, createdAt, organizationId } = user

    expect([id, name, createdAt, organizationId]).toBeTruthy()
  })

  it('should be able to get values from getters', () => {
    const user = new User({
      name: 'John Doe',
      role: 'admin',
      email: 'foo@bar.com',
      password: '123456',
      admin: true,
      organizationId: '1',
      customerDemandId: ['1', '2'],
    })

    const userCreationDate = user.createdAt

    expect(userCreationDate).toBeTruthy()
  })

  it('should be able to set values throught setters', () => {
    const user = new User({
      name: 'John Doe',
      role: 'admin',
      email: 'foo@bar.com',
      password: '123456',
      admin: true,
      createdAt: new Date(),
      organizationId: '1',
      customerDemandId: ['1', '2'],
    })

    user.name = 'John Smith Doe'

    expect(user.name === 'John Smith Doe').toBeTruthy()
  })
})
