import { Injectable } from '@nestjs/common'
import { Organization } from 'src/app/entities/Organization/organization.entity'
import { OrganizationRepository } from 'src/app/repositories/Organization/organization-repository'

interface CreateOrganizationRequest {
  name: string
  email: string
  password: string
}

@Injectable()
export class CreateOrganization {
  constructor(private organizationsRepository: OrganizationRepository) {}

  async execute(request: CreateOrganizationRequest): Promise<Organization> {
    const organization = new Organization({
      ...request,
    })

    await this.organizationsRepository.create(organization)

    return organization
  }
}
