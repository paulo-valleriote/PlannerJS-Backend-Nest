import { InMemoryOrganizationRepository } from '@test/repositories/in-memory-organization-repository'
import { CreateOrganization } from './create-organization'
import { FindOrganizationById } from './find-organization-by-id'

describe('Organization', () => {
  it('should be able to find an organization by id', async () => {
    const organizationRepository = new InMemoryOrganizationRepository()

    const createOrganization = new CreateOrganization(organizationRepository)

    const organization = await createOrganization.execute({
      email: 'test@gmail.com',
      name: 'test',
      password: 'test',
    })

    const findOrganizationById = new FindOrganizationById(
      organizationRepository,
    )

    const inMemoryOrganization = await findOrganizationById.execute(
      organization.id,
    )

    expect(inMemoryOrganization).toEqual(organization)
  })
})
