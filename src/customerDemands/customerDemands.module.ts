import { Module } from '@nestjs/common'
import { CustomerDemandsController } from './customerDemands.controller'
import { CustomerDemandsService } from './customerDemands.service'

@Module({
  controllers: [CustomerDemandsController],
  providers: [CustomerDemandsService],
})
export class CustomerDemandsModule {}
