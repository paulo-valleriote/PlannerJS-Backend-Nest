import { Injectable } from '@nestjs/common'
import { Organization } from 'src/app/entities/Organization/organization.entity'
import { OrganizationRepository } from 'src/app/repositories/Organization/organization-repository'

@Injectable()
export class FindOrganizationById {
  constructor(private organizationsRepository: OrganizationRepository) {}

  async execute(request: string): Promise<Organization> {
    const organizationId = request

    const organizations = await this.organizationsRepository.findById(
      organizationId,
    )

    if (!organizations) {
      throw new Error(`Organization ${organizationId} not found`)
    }

    return organizations
  }
}
