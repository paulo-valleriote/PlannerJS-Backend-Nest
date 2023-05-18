import { Module } from '@nestjs/common'

import { UsersController } from './users.controller'

import { RegisterUser } from 'src/app/use-cases/User/register-user'
import { UpdateUser } from 'src/app/use-cases/User/update-user'
import { FindUserById } from 'src/app/use-cases/User/find-user-by-id'
import { ListUsers } from 'src/app/use-cases/User/list-users'
import { DeleteUser } from 'src/app/use-cases/User/delete-user'
import { UserDatabaseModule } from '@infra/database/prisma/repositories/prisma-user-database.module'
import { LoginUser } from '@app/use-cases/User/login-user'

@Module({
  imports: [UserDatabaseModule],
  controllers: [UsersController],
  providers: [
    RegisterUser,
    LoginUser,
    UpdateUser,
    FindUserById,
    ListUsers,
    DeleteUser,
  ],
})
export class UsersModule {}
