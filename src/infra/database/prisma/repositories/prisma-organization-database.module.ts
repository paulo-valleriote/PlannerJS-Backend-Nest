import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { OrganizationRepository } from 'src/app/repositories/Organization/organization-repository'
import { PrismaOrganizationRepository } from './prisma-organization-repository'

@Module({
  providers: [
    PrismaService,
    { provide: OrganizationRepository, useClass: PrismaOrganizationRepository },
  ],
  exports: [
    { provide: OrganizationRepository, useClass: PrismaOrganizationRepository },
  ],
})
export class OrganizationDatabaseModule {}
