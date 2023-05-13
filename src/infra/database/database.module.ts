import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { UsersRepository } from 'src/app/repositories/User/users-repository'
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository'

@Module({
  providers: [
    PrismaService,
    { provide: UsersRepository, useClass: PrismaUserRepository },
  ],
  exports: [PrismaUserRepository],
})
export class DatabaseModule {}
