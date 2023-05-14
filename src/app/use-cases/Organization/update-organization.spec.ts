import { InMemoryOrganizationRepository } from '@test/repositories/in-memory-organization-repository'
import { CreateOrganization } from './create-organization'
import { UpdateOrganization } from './update-organization'

describe('Organization', () => {
  it('should be able to update an organization', async () => {
    const organizationRepository = new InMemoryOrganizationRepository()

    const createOrganization = new CreateOrganization(organizationRepository)

    const organization = await createOrganization.execute({
      email: 'test@gmail.com',
      name: 'test',
      password: 'test',
    })

    const updateOrganization = new UpdateOrganization(organizationRepository)

    const modifiedOrganization = {
      name: 'modified organization',
    }

    updateOrganization.execute({
      id: organization.id,
      organization: modifiedOrganization,
    })

    expect(organizationRepository.organizations[0].name).toEqual(
      'modified organization',
    )
  })
})
