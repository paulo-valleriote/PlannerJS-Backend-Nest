import { Module } from '@nestjs/common'

import { OrganizationsController } from './organizations.controller'
import { CreateOrganization } from 'src/app/use-cases/Organization/create-organization'
import { UpdateOrganization } from 'src/app/use-cases/Organization/update-organization'
import { FindOrganizationById } from 'src/app/use-cases/Organization/find-organization-by-id'
import { ListOrganization } from 'src/app/use-cases/Organization/list-organization'
import { DeleteOrganization } from 'src/app/use-cases/Organization/delete-organization'
import { OrganizationDatabaseModule } from '@infra/database/prisma/repositories/prisma-organization-database.module'

@Module({
  imports: [OrganizationDatabaseModule],
  controllers: [OrganizationsController],
  providers: [
    CreateOrganization,
    UpdateOrganization,
    FindOrganizationById,
    ListOrganization,
    DeleteOrganization,
  ],
})
export class OrganizationsModule {}
