import { InMemoryOrganizationRepository } from '@test/repositories/in-memory-organization-repository'
import { CreateOrganization } from './create-organization'
import { DeleteOrganization } from './delete-organization'

describe('Organization', () => {
  it('should be able to delete an pre existing organization', async () => {
    const organizationRepository = new InMemoryOrganizationRepository()

    const createOrganization = new CreateOrganization(organizationRepository)

    const organization = await createOrganization.execute({
      email: 'test@gmail.com',
      name: 'test',
      password: 'test',
    })

    const deleteOrganization = new DeleteOrganization(organizationRepository)

    deleteOrganization.execute(organization.id)

    expect(organizationRepository.organizations.length).toEqual(0)
    expect(
      organizationRepository.organizations.includes(organization),
    ).toBeFalsy()
  })
})
