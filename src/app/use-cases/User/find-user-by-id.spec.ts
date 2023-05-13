import { InMemoryUsersRepository } from '../../../../test/repositories/in-memory-users-repository'
import { CreateUser } from './create-user'
import { FindUserById } from './find-user-by-id'

describe('User', () => {
  it('should be able to find user by id', async () => {
    const usersRepository = new InMemoryUsersRepository()

    const createUser = new CreateUser(usersRepository)

    const newUser = await createUser.execute({
      name: 'test',
      role: 'test',
      email: 'test@example.com',
      password: 'test',
      admin: false,
    })

    const findUserById = new FindUserById(usersRepository)

    const user = await findUserById.execute(newUser.id)

    expect(user).toEqual(newUser)
    expect(usersRepository.users[0]).toEqual(user)
  })
})
