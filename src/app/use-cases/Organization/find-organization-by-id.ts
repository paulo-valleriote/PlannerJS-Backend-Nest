import { Injectable } from '@nestjs/common'
import { OrganizationRepository } from '@app/repositories/Organization/organization-repository'
import { ListOrganizationDto } from 'src/infra/http/dtos/organizations/list-organization.dto/list-organization.dto'

@Injectable()
export class FindOrganizationById {
  constructor(private organizationsRepository: OrganizationRepository) {}

  async execute(request: string): Promise<ListOrganizationDto> {
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
