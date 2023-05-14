import { OrganizationRepository } from 'src/app/repositories/Organization/organization-repository'
import { Organization } from 'src/app/entities/Organization/organization.entity'
import { UpdateOrganizationDto } from 'src/infra/http/dtos/organizations/update-organization.dto/update-organization.dto'

export class InMemoryOrganizationRepository implements OrganizationRepository {
  public organizations: Organization[] = []

  async create(organization: Organization) {
    this.organizations.push(organization)
  }

  async update(id: string, organization: UpdateOrganizationDto): Promise<void> {
    const organizationIndex = this.organizations.findIndex(
      (inMemoryOrganization) => inMemoryOrganization.id === id,
    )

    if (organizationIndex < 0) {
      throw new Error('Organization not found')
    }

    Object.assign(this.organizations[organizationIndex], organization)
  }

  async findById(id: string): Promise<Organization> {
    const organization = this.organizations.find(
      (organizationInMemory) => organizationInMemory.id === id,
    )

    if (!organization) {
      throw new Error('Organization not found')
    }

    return organization
  }

  async list(): Promise<Organization[]> {
    return this.organizations
  }

  async delete(id: string): Promise<void> {
    const organizationIndex = this.organizations.findIndex(
      (inMemoryOrganization) => inMemoryOrganization.id === id,
    )

    if (organizationIndex < 0) {
      throw new Error('Organization not found')
    }

    this.organizations.splice(organizationIndex, 1)
  }
}
