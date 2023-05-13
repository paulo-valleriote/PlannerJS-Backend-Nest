import { Module } from '@nestjs/common'
import { OrganizationsController } from '../http/controllers/organizations.controller'
import { OrganizationsService } from './organizations.service'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService, PrismaService],
})
export class OrganizationsModule {}
