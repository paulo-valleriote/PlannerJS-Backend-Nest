import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { randomUUID } from 'node:crypto'

@Injectable()
export class OrganizationsService {
  constructor(private readonly prisma: PrismaService) {}

  async listAll() {
    try {
      return await this.prisma.organization.findMany()
    } catch (err) {
      throw new NotFoundException(err.message)
    }
  }

  async listOne(id: string) {
    try {
      return await this.prisma.organization.findUnique({ where: { id } })
    } catch (err) {
      throw new NotFoundException(err.message)
    }
  }

  async create(createOrganizationDTO: any) {
    try {
      await this.prisma.organization.create({
        data: {
          id: randomUUID(),
          customers: {},
          employees: {},
          ...createOrganizationDTO,
        },
      })
    } catch (err) {
      throw new BadRequestException(err.message)
    }
  }

  async update(id: string, updateOrganizationDTO: any) {
    try {
      await this.prisma.organization.update({
        where: { id },
        data: {
          name: updateOrganizationDTO.name,
          email: updateOrganizationDTO.email,
          password: updateOrganizationDTO.password,
        },
      })
    } catch (err) {
      throw new BadRequestException(err.message)
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.organization.delete({ where: { id } })
    } catch (err) {
      throw new BadRequestException(err.message)
    }
  }
}
