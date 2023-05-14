import { Injectable } from '@nestjs/common'
import { OrganizationRepository } from '@app/repositories/Organization/organization-repository'

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
    await this.organizationsRepository.update(request.id, {
      ...request.organization,
    })
  }
}
