import { Module } from '@nestjs/common'

import { CustomerDemandsController } from './customerDemands.controller'
import { CreateCustomerDemand } from 'src/app/use-cases/CustomerDemand/create-customer-demand'
import { UpdateCustomerDemand } from 'src/app/use-cases/CustomerDemand/update-customer-demand'
import { FindCustomerDemandById } from 'src/app/use-cases/CustomerDemand/find-customer-demand-by-id'
import { ListCustomerDemand } from 'src/app/use-cases/CustomerDemand/list-customer-demand'
import { DeleteCustomerDemand } from 'src/app/use-cases/CustomerDemand/delete-customer-demand'
import { CustomerDemandsDatabaseModule } from '@infra/database/prisma/repositories/prisma-customer-demands-database.module'

@Module({
  imports: [CustomerDemandsDatabaseModule],
  controllers: [CustomerDemandsController],
  providers: [
    CreateCustomerDemand,
    UpdateCustomerDemand,
    FindCustomerDemandById,
    ListCustomerDemand,
    DeleteCustomerDemand,
  ],
})
export class CustomerDemandsModule {}
