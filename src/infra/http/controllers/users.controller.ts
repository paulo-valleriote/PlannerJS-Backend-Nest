import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { CreateUser } from 'src/app/use-cases/User/create-user'
import { UpdateUser } from 'src/app/use-cases/User/update-user'
import { ListUsers } from 'src/app/use-cases/User/list-users'
import { FindUserById } from 'src/app/use-cases/User/find-user-by-id'

import { CreateUserDto } from '../dtos/users/create-user.dto/create-user.dto'
import { UpdateUserDto } from '../dtos/users/update-user.dto/update-user.dto'
import { DeleteUser } from 'src/app/use-cases/User/delete-user'

@Controller('users')
export class UsersController {
  constructor(
    private createUser: CreateUser,
    private updateUser: UpdateUser,
    private listUsers: ListUsers,
    private findUserById: FindUserById,
    private deleteUser: DeleteUser,
  ) {}

  @Get()
  async listAll() {
    return this.listUsers.execute()
  }

  @Get(':id')
  async listOne(@Param('id') id: string) {
    return this.findUserById.execute(id)
  }

  @Post()
  async create(@Body() createUserDTO: CreateUserDto) {
    await this.createUser.execute({ ...createUserDTO })
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDTO: UpdateUserDto) {
    this.updateUser.execute({ id, user: updateUserDTO })
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.deleteUser.execute(id)
  }
}
