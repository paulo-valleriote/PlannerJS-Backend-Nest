import { InMemoryOrganizationRepository } from '@test/repositories/in-memory-organization-repository'
import { CreateOrganization } from './create-organization'

describe('Organization', () => {
  it('should be able to create a new organization', async () => {
    const organizationRepository = new InMemoryOrganizationRepository()

    const createOrganization = new CreateOrganization(organizationRepository)

    const organization = await createOrganization.execute({
      email: 'test@gmail.com',
      name: 'test',
      password: 'test',
    })

    expect(organizationRepository.organizations[0]).toEqual(organization)
    expect(
      organizationRepository.organizations.includes(organization),
    ).toBeTruthy()
  })
})
