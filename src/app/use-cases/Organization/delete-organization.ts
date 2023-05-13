import { Injectable } from '@nestjs/common'
import { OrganizationRepository } from 'src/app/repositories/Organization/organization-repository'

@Injectable()
export class DeleteOrganization {
  constructor(private organizationsRepository: OrganizationRepository) {}

  async execute(request: string): Promise<void> {
    const organizationId = request

    await this.organizationsRepository.delete(organizationId)
  }
}
