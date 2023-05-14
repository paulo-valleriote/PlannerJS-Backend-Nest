import { Injectable } from '@nestjs/common'
import { OrganizationRepository } from '@app/repositories/Organization/organization-repository'
import { EntityIdNotProvidedError } from '../models/errors/entityIdNotProvided'

interface UpdateOrganizationRequest {
  id: string
  organization: {
    name?: string
    email?: string
    password?: string
  }
}

@Injectable()
export class UpdateOrganization {
  constructor(private organizationsRepository: OrganizationRepository) {}

  async execute(request: UpdateOrganizationRequest): Promise<void> {
    if (!request.id) {
      throw new EntityIdNotProvidedError('Organization')
    }

    await this.organizationsRepository.update(request.id, {
      ...request.organization,
    })
  }
}
