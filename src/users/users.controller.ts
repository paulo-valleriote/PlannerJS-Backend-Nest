import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async listAll() {
    return 'Listagem Usuários'
  }

  @Get(':id')
  async listOne(@Param('id') id: string) {
    return `Usuário ${id}`
  }

  @Post()
  async create(@Body() body) {
    return body
  }

  @Patch(':id')
  async update(@Param('id') id: string) {
    return `Usuário ${id} foi atualizado`
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return `Usuário ${id} foi excluido`
  }
}
