import { Module } from '@nestjs/common'

import { PrismaService } from '../prisma.service'
import { CustomerDemandsRepository } from 'src/app/repositories/CustomerDemands/customer-demands-repository'
import { PrismaCustomerDemandRepository } from './prisma-customer-demand-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: CustomerDemandsRepository,
      useClass: PrismaCustomerDemandRepository,
    },
  ],
  exports: [
    {
      provide: CustomerDemandsRepository,
      useClass: PrismaCustomerDemandRepository,
    },
  ],
})
export class CustomerDemandsDatabaseModule {}
