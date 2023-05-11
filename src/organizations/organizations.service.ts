import { Injectable, NotFoundException } from '@nestjs/common'
import { Organization } from './entities/organization.entity'

@Injectable()
export class OrganizationsService {
  private organizations: Organization[] = [
    {
      id: 1,
      name: 'Organization 1',
      email: 'organization@example.com',
      password: 'aSdasd21311',
      customers: ['john doe'],
      employees: ['john doe'],
    },
  ]

  async listAll() {
    return this.organizations
  }

  async listOne(id: string) {
    return this.organizations.find(
      (organization) => organization.id === Number(id),
    )
  }

  async create(createOrganizationDTO: any) {
    const newOrganization = {
      ...createOrganizationDTO,
      employees: [],
      customers: [],
    }

    this.organizations.push(newOrganization)
  }

  async update(id, updateOrganizationDTO: any) {
    const organizationIndex = this.organizations.findIndex(
      (organization) => organization.id === Number(id),
    )

    if (organizationIndex <= 0) {
      throw new NotFoundException(`Organization ${id} not found`)
    }

    this.organizations[organizationIndex] = updateOrganizationDTO
  }

  async remove(id: string) {
    const organizationIndex = this.organizations.findIndex(
      (organization) => organization.id === Number(id),
    )

    if (organizationIndex <= 0) {
      throw new NotFoundException(`Organization ${id} not found`)
    }

    this.organizations.splice(organizationIndex, 1)
  }
}
