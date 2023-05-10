import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { CustomersService } from './customers.service'

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  async listAll() {
    return 'Listagem Clientes'
  }

  @Get(':id')
  async listOne(@Param('id') id: string) {
    return `Cliente ${id}`
  }

  @Post()
  async create(@Body() body) {
    return body
  }

  @Patch(':id')
  async update(@Param('id') id: string) {
    return `Cliente ${id} foi atualizado`
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return `CLiente ${id} foi excluido`
  }
}
