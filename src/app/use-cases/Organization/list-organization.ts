import { Injectable } from '@nestjs/common'
import { OrganizationRepository } from '@app/repositories/Organization/organization-repository'
import { ListOrganizationDto } from '@infra/http/dtos/organizations/list-organization.dto/list-organization.dto'
import { EntityNotFound } from '../models/errors/entityNotFound'

@Injectable()
export class ListOrganization {
  constructor(private organizationsRepository: OrganizationRepository) {}

  async execute(): Promise<ListOrganizationDto[]> {
    const organizations = await this.organizationsRepository.list()

    if (!organizations) {
      throw new EntityNotFound('Organizations')
    }

    return organizations
  }
}
