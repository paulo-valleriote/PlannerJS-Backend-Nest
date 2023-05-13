import { Module } from '@nestjs/common'
import { CustomerDemandsController } from '../http/controllers/customerDemands.controller'
import { CustomerDemandsService } from './customerDemands.service'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [CustomerDemandsController],
  providers: [CustomerDemandsService, PrismaService],
})
export class CustomerDemandsModule {}
