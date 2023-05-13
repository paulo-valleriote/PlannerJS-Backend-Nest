import { Injectable } from '@nestjs/common'
import { Organization } from 'src/app/entities/Organization/organization.entity'
import { OrganizationRepository } from 'src/app/repositories/Organization/organization-repository'

@Injectable()
export class ListOrganization {
  constructor(private organizationsRepository: OrganizationRepository) {}

  async execute(): Promise<Organization[]> {
    const organizations = await this.organizationsRepository.list()

    if (!organizations) {
      throw new Error('Organizations not found')
    }

    return organizations
  }
}
