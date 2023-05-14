import { Module } from '@nestjs/common'

import { UserDatabaseModule } from './prisma/repositories/prisma-user-database.module'
import { OrganizationDatabaseModule } from './prisma/repositories/prisma-organization-database.module'
import { CustomersDatabaseModule } from './prisma/repositories/prisma-customer-database.module'
import { CustomerDemandsDatabaseModule } from './prisma/repositories/prisma-customer-demands-database.module'

@Module({
  imports: [
    UserDatabaseModule,
    OrganizationDatabaseModule,
    CustomersDatabaseModule,
    CustomerDemandsDatabaseModule,
  ],
})
export class DatabaseModule {}
