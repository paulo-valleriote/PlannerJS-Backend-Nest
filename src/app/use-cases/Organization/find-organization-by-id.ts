import { Injectable } from '@nestjs/common'
import { OrganizationRepository } from '@app/repositories/Organization/organization-repository'
import { ListOrganizationDto } from 'src/infra/http/dtos/organizations/list-organization.dto/list-organization.dto'
import { EntityIdNotProvidedError } from '../models/errors/entityIdNotProvided'
import { EntityNotFound } from '../models/errors/entityNotFound'

@Injectable()
export class FindOrganizationById {
  constructor(private organizationsRepository: OrganizationRepository) {}

  async execute(request: string): Promise<ListOrganizationDto> {
    const organizationId = request

    if (!organizationId) {
      throw new EntityIdNotProvidedError('Organization')
    }

    const organizations = await this.organizationsRepository.findById(
      organizationId,
    )

    if (Object.values(organizations).length < 1) {
      throw new EntityNotFound('Organization')
    }

    return organizations
  }
}
