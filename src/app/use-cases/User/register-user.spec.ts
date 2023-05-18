import { CreateUser } from './register-user'
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository'

describe('User', () => {
  it('should be able to create a new user', async () => {
    const usersRepository = new InMemoryUsersRepository()

    const createUser = new CreateUser(usersRepository)

    const user = await createUser.execute({
      name: 'test',
      role: 'test',
      email: 'test@example.com',
      password: 'test',
      admin: false,
    })

    expect(usersRepository.users).toHaveLength(1)
    expect(usersRepository.users[0]).toEqual(user)
  })
})
