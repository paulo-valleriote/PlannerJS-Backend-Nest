import { InMemoryOrganizationRepository } from '@test/repositories/in-memory-organization-repository'
import { CreateOrganization } from './create-organization'
import { ListOrganization } from './list-organization'

describe('Organization', () => {
  it('should be able to list all organizations', async () => {
    const organizationRepository = new InMemoryOrganizationRepository()

    const createOrganization = new CreateOrganization(organizationRepository)

    for (let i = 0; i < 5; i++) {
      await createOrganization.execute({
        email: 'test@gmail.com',
        name: 'test',
        password: 'test',
      })
    }

    const listOrganizations = new ListOrganization(organizationRepository)

    listOrganizations.execute()

    expect(organizationRepository.organizations.length).toEqual(5)
  })
})
