import { PrismaService } from '../prisma.service'
import { Injectable, NotFoundException } from '@nestjs/common'

import { OrganizationRepository } from '../../../../../src/app/repositories/Organization/organization-repository'
import { Organization } from '../../../../../src/app/entities/Organization/organization.entity'
import { ListOrganizationDto } from '../../../../../src/infra/http/dtos/organizations/list-organization.dto/list-organization.dto'
import { UpdateOrganizationDto } from 'src/infra/http/dtos/organizations/update-organization.dto/update-organization.dto'

@Injectable()
export class PrismaOrganizationRepository implements OrganizationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(organization: Organization): Promise<void> {
    await this.prismaService.organization.create({
      data: {
        id: organization.id,
        name: organization.name,
        email: organization.email,
        password: organization.password,
      },
    })
  }

  async update(id: string, organization: UpdateOrganizationDto): Promise<void> {
    await this.prismaService.organization.update({
      data: {
        ...organization,
      },
      where: {
        id,
      },
    })
  }

  async findById(id: string): Promise<ListOrganizationDto> {
    const { ...organization } =
      await this.prismaService.organization.findUnique({
        where: { id },
        include: {
          Customers: true,
          Users: true,
        },
      })

    if (!organization) {
      throw new Error(`Organization ${id} not found`)
    }

    return organization
  }

  async list(): Promise<ListOrganizationDto[]> {
    const organizations = await this.prismaService.organization.findMany()

    if (organizations.length < 0) {
      throw new Error('Nothing was found')
    }

    return organizations
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.organization
      .delete({ where: { id } })
      .catch((err) => {
        throw new NotFoundException(
          'Organization not found, delete operation has been cancelled',
          { cause: err },
        )
      })
  }
}
