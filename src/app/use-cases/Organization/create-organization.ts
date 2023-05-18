import { Injectable } from '@nestjs/common'
import { Organization } from '@app/entities/Organization/organization.entity'
import { OrganizationRepository } from '@app/repositories/Organization/organization-repository'

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
      email: request.email,
      name: request.name,
      password: request.password,
    })

    await this.organizationsRepository.create(organization)

    return organization
  }
}
