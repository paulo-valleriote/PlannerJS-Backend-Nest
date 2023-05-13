import { Module } from '@nestjs/common'

import { UsersController } from './controllers/users.controller'
import { OrganizationsController } from './controllers/organizations.controller'
import { CustomersController } from './controllers/customers.controller'
import { CustomerDemandsController } from './controllers/customerDemands.controller'
import { CreateUser } from 'src/app/use-cases/User/create-user'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [
    UsersController,
    OrganizationsController,
    CustomersController,
    CustomerDemandsController,
  ],
  providers: [CreateUser],
})
export class HttpModule {}
