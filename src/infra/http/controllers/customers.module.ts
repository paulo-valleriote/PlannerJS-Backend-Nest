import { Module } from '@nestjs/common'

import { CustomersController } from './customers.controller'
import { CreateCustomer } from 'src/app/use-cases/Customer/create-customer'
import { UpdateCustomer } from 'src/app/use-cases/Customer/update-customer'
import { FindCustomerById } from 'src/app/use-cases/Customer/find-customer-by-id'
import { ListCustomer } from 'src/app/use-cases/Customer/list-customer'
import { DeleteCustomer } from 'src/app/use-cases/Customer/delete-customer'
import { CustomersDatabaseModule } from '@infra/database/prisma/repositories/prisma-customer-database.module'

@Module({
  imports: [CustomersDatabaseModule],
  controllers: [CustomersController],
  providers: [
    CreateCustomer,
    UpdateCustomer,
    FindCustomerById,
    ListCustomer,
    DeleteCustomer,
  ],
})
export class CustomersModule {}
