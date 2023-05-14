import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository'
import { CreateUser } from './create-user'
import { DeleteUser } from './delete-user'

describe('User', () => {
  it('should be able to delete an existing user', async () => {
    const usersRepository = new InMemoryUsersRepository()

    const createUser = new CreateUser(usersRepository)

    const newUser = await createUser.execute({
      name: 'test',
      role: 'test',
      email: 'test@example.com',
      password: 'test',
      admin: false,
    })

    const deleteUser = new DeleteUser(usersRepository)

    await deleteUser.execute(newUser.id)

    expect(usersRepository.users.includes(newUser)).toBeFalsy()
  })
})
