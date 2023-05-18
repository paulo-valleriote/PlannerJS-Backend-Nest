import { Injectable } from '@nestjs/common'
import { OrganizationRepository } from '@app/repositories/Organization/organization-repository'
import { EntityIdNotProvidedError } from '../models/errors/entityIdNotProvided'
import { hash } from 'bcrypt'

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

    if (request.organization.password) {
      await this.organizationsRepository.update(request.id, {
        ...request.organization,
        password: await hash(request.organization.password, 8),
      })

      return
    }

    await this.organizationsRepository.update(request.id, {
      ...request.organization,
    })
  }
}
