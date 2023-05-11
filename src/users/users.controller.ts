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
import { CreateUserDto } from './dto/create-user.dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async listAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  async listOne(@Param('id') id: string) {
    return this.usersService.findOne(id)
  }

  @Post()
  async create(@Body() createUserDTO: CreateUserDto) {
    this.usersService.create(createUserDTO)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDTO: UpdateUserDto) {
    this.usersService.update(id, updateUserDTO)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.usersService.remove(id)
  }
}
