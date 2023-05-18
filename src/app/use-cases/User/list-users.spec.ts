import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository'
import { CreateUser } from './register-user'
import { ListUsers } from './list-users'

describe('User', () => {
  it('should be able to list all users', async () => {
    const usersRepository = new InMemoryUsersRepository()

    const createUser = new CreateUser(usersRepository)

    for (let i = 0; i < 4; i++) {
      await createUser.execute({
        name: `test ${i}`,
        role: `test ${i}`,
        email: `test_${i}@example.com`,
        password: `test ${i}`,
        admin: false,
      })
    }

    const listUsers = new ListUsers(usersRepository)

    const users = await listUsers.execute()

    expect(users.length).toEqual(usersRepository.users.length)
    expect(usersRepository.users).toEqual(users)
  })
})
