import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { CustomerDemandsModule } from './infra/customerDemands/customerDemands.module'
import { CustomersModule } from './infra/customers/customers.module'
import { OrganizationsModule } from './infra/organizations/organizations.module'
import { UsersModule } from './infra/users/users.module'
import { AuthService } from './auth/auth.service'
@Module({
  imports: [
    CustomerDemandsModule,
    CustomersModule,
    OrganizationsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
