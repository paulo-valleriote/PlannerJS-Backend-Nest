import { Module } from '@nestjs/common'
import { CustomersController } from '../http/controllers/customers.controller'
import { CustomersService } from './customers.service'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [CustomersController],
  providers: [CustomersService, PrismaService],
})
export class CustomersModule {}
