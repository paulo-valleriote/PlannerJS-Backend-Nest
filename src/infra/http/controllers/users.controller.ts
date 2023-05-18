import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { RegisterUser } from 'src/app/use-cases/User/register-user'
import { UpdateUser } from 'src/app/use-cases/User/update-user'
import { ListUsers } from 'src/app/use-cases/User/list-users'
import { FindUserById } from 'src/app/use-cases/User/find-user-by-id'

import { RegisterUserDto } from '../dtos/users/register-user.dto/register-user.dto'
import { UpdateUserDto } from '../dtos/users/update-user.dto/update-user.dto'
import { DeleteUser } from 'src/app/use-cases/User/delete-user'
import { LoginUserDto } from '../dtos/users/login-user.dto/login-user.dto'
import { LoginUser } from '@app/use-cases/User/login-user'

@Controller('users')
export class UsersController {
  constructor(
    private registerUser: RegisterUser,
    private loginUser: LoginUser,
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

  @Post('/register')
  async register(@Body() registerUserDTO: RegisterUserDto) {
    await this.registerUser.execute({ ...registerUserDTO })
  }

  @Post('/login')
  async login(@Body() loginUserDTO: LoginUserDto) {
    return await this.loginUser.execute({ ...loginUserDTO })
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
