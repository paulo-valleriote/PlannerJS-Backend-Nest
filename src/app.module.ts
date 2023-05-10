import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { CustomerDemandsModule } from './customerDemands/customerDemands.module'
import { CustomersModule } from './customers/customers.module'
import { OrganizationsModule } from './organizations/organizations.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    CustomerDemandsModule,
    CustomersModule,
    OrganizationsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
