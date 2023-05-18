import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'

import { OrganizationsModule } from './controllers/organizations.module'
import { UsersModule } from './controllers/users.module'
import { CustomersModule } from './controllers/customers.module'
import { CustomerDemandsModule } from './controllers/customerDemands.module'
import { AuthMiddleware } from './middlewares/auth.middleware'
import { AdminPermissionMiddleware } from './middlewares/adminPermission.middleware'
import { CustomersController } from './controllers/customers.controller'
import { CustomerDemandsController } from './controllers/customerDemands.controller'
import { UsersController } from './controllers/users.controller'
import { OrganizationsController } from './controllers/organizations.controller'

@Module({
  imports: [
    OrganizationsModule,
    UsersModule,
    CustomersModule,
    CustomerDemandsModule,
  ],
})
export class HttpModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude('users/login', 'users/register')
      .forRoutes(
        CustomersController,
        CustomerDemandsController,
        UsersController,
        OrganizationsController,
      )
  }
}
