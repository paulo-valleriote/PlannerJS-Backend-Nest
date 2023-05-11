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

import { OrganizationsService } from './organizations.service'
import { CreateOrganizationDto } from './dto/create-organization.dto/create-organization.dto'
import { UpdateOrganizationDto } from './dto/update-organization.dto/update-organization.dto'

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  async listAll() {
    return this.organizationsService.listAll()
  }

  @Get(':id')
  async listOne(@Param('id') id: string) {
    const organization = await this.organizationsService.listOne(id)

    if (!organization) {
      throw new NotFoundException(`Organization ID ${id} not found`)
    }

    return organization
  }

  @Post()
  async create(@Body() createOrganizationDTO: CreateOrganizationDto) {
    this.organizationsService.create(createOrganizationDTO)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrganizationDTO: UpdateOrganizationDto,
  ) {
    this.organizationsService.update(id, updateOrganizationDTO)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.organizationsService.remove(id)
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
