import { Injectable } from '@nestjs/common'
import { OrganizationRepository } from '@app/repositories/Organization/organization-repository'
import { EntityIdNotProvidedError } from '../models/errors/entityIdNotProvided'

@Injectable()
export class DeleteOrganization {
  constructor(private organizationsRepository: OrganizationRepository) {}

  async execute(request: string): Promise<void> {
    const organizationId = request

    if (!organizationId) {
      throw new EntityIdNotProvidedError('Organization')
    }

    await this.organizationsRepository.delete(organizationId)
  }
}
