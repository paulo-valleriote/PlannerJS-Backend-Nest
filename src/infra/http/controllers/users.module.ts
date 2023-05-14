import { Module } from '@nestjs/common'

import { UsersController } from './users.controller'

import { CreateUser } from 'src/app/use-cases/User/create-user'
import { UpdateUser } from 'src/app/use-cases/User/update-user'
import { FindUserById } from 'src/app/use-cases/User/find-user-by-id'
import { ListUsers } from 'src/app/use-cases/User/list-users'
import { DeleteUser } from 'src/app/use-cases/User/delete-user'
import { UserDatabaseModule } from '@infra/database/prisma/repositories/prisma-user-database.module'

@Module({
  imports: [UserDatabaseModule],
  controllers: [UsersController],
  providers: [CreateUser, UpdateUser, FindUserById, ListUsers, DeleteUser],
})
export class UsersModule {}
