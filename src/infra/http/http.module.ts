import { Module } from '@nestjs/common'

import { OrganizationsModule } from './controllers/organizations.module'
import { UsersModule } from './controllers/users.module'
import { CustomersModule } from './controllers/customers.module'
import { CustomerDemandsModule } from './controllers/customerDemands.module'

@Module({
  imports: [
    OrganizationsModule,
    UsersModule,
    CustomersModule,
    CustomerDemandsModule,
  ],
})
export class HttpModule {}
