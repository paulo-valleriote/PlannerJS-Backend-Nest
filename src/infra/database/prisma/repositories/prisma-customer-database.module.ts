import { Module } from '@nestjs/common'

import { PrismaService } from '../prisma.service'
import { CustomerRepository } from 'src/app/repositories/Customer/customer-repository'
import { PrismaCustomerRepository } from './prisma-customer-repository'

@Module({
  providers: [
    PrismaService,
    { provide: CustomerRepository, useClass: PrismaCustomerRepository },
  ],
  exports: [
    { provide: CustomerRepository, useClass: PrismaCustomerRepository },
  ],
})
export class CustomersDatabaseModule {}
