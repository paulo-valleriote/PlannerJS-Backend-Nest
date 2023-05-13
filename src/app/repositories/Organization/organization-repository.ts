import { Organization } from 'src/app/entities/Organization/organization.entity'
import { UpdateOrganizationDto } from 'src/infra/http/dtos/organizations/update-organization.dto/update-organization.dto'

export abstract class OrganizationRepository {
  abstract create(organization: Organization): Promise<void>

  abstract list(): Promise<Organization[]>

  abstract findById(id: string): Promise<Organization>

  abstract update(
    id: string,
    organization: UpdateOrganizationDto,
  ): Promise<void>

  abstract delete(id: string): Promise<void>
}
