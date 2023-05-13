import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { CreateOrganization } from 'src/app/use-cases/Organization/create-organization'
import { UpdateOrganization } from 'src/app/use-cases/Organization/update-organization'
import { DeleteOrganization } from 'src/app/use-cases/Organization/delete-organization'
import { ListOrganization } from 'src/app/use-cases/Organization/list-organization'
import { FindOrganizationById } from 'src/app/use-cases/Organization/find-organization-by-id'

import { CreateOrganizationDto } from './../dtos/organizations/create-organization.dto/create-organization.dto'
import { UpdateOrganizationDto } from './../dtos/organizations/update-organization.dto/update-organization.dto'

@Controller('organizations')
export class OrganizationsController {
  constructor(
    private createOrganization: CreateOrganization,
    private updateOrganization: UpdateOrganization,
    private deleteOrganization: DeleteOrganization,
    private listOrganization: ListOrganization,
    private findOrganizationById: FindOrganizationById,
  ) {}

  @Get()
  async listAll() {
    return await this.listOrganization.execute()
  }

  @Get(':id')
  async listOne(@Param('id') id: string) {
    const organization = await this.findOrganizationById.execute(id)

    if (!organization) {
      throw new NotFoundException(`Organization ID ${id} not found`)
    }

    return organization
  }

  @Post()
  async create(@Body() createOrganizationDTO: CreateOrganizationDto) {
    await this.createOrganization.execute(createOrganizationDTO)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrganizationDTO: UpdateOrganizationDto,
  ) {
    this.updateOrganization.execute({ id, organization: updateOrganizationDTO })
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.deleteOrganization.execute(id)
  }

  @Get('employee')
  async listAllEmployees() {
    return 'Listagem de Funcionários'
  }

  @Get('employee/:id')
  async listOneEmployee(@Param('id') id: string) {
    return `Funcionário ${id}`
  }

  @Post('employee')
  async addEmployee(@Body() body) {
    return body
  }

  @Patch('employee/:id')
  async updateEmployee(@Param('id') id: string) {
    return `Funcionário ${id} foi atualizado`
  }

  @Delete('employee/:id')
  async removeEmployee(@Param('id') id: string) {
    return `Funcionário ${id} foi excluido`
  }
}
