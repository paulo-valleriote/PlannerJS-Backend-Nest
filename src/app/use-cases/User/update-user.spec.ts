import { CreateUser } from './register-user'
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository'
import { UpdateUser } from './update-user'
import { randomUUID } from 'crypto'

describe('User', () => {
  it('should be able to update user data', async () => {
    const usersRepository = new InMemoryUsersRepository()

    const createUser = new CreateUser(usersRepository)

    const user = await createUser.execute({
      name: 'test',
      role: 'test',
      email: 'test@example.com',
      password: 'test',
      admin: false,
    })

    const updateUser = new UpdateUser(usersRepository)

    await updateUser.execute({
      id: user.id,
      user: {
        name: 'updated test',
      },
    })

    expect(usersRepository.users[0].name).toEqual('updated test')
  })

  it('should be able to add organizationId to an existing user', async () => {
    const usersRepository = new InMemoryUsersRepository()

    const createUser = new CreateUser(usersRepository)

    const user = await createUser.execute({
      name: 'test',
      role: 'test',
      email: 'test@example.com',
      password: 'test',
      admin: false,
    })

    const updateUser = new UpdateUser(usersRepository)

    const organizationId = randomUUID()

    await updateUser.execute({
      id: user.id,
      user: {
        name: 'updated test',
        organizationId,
      },
    })

    expect(usersRepository.users[0].organizationId).toBeTruthy()
    expect(usersRepository.users[0].organizationId).toEqual(organizationId)
  })

  it('should be able to add customerDemandId to an existing user', async () => {
    const usersRepository = new InMemoryUsersRepository()

    const createUser = new CreateUser(usersRepository)

    const user = await createUser.execute({
      name: 'test',
      role: 'test',
      email: 'test@example.com',
      password: 'test',
      admin: false,
    })

    const updateUser = new UpdateUser(usersRepository)

    const customerDemandId = randomUUID()

    await updateUser.execute({
      id: user.id,
      user: {
        name: 'updated test',
        customerDemandId,
      },
    })

    expect(usersRepository.users[0].customerDemandId).toBeTruthy()
    expect(usersRepository.users[0].customerDemandId).toEqual(customerDemandId)
  })
})
