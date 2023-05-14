import { Module } from '@nestjs/common'
import { UsersRepository } from 'src/app/repositories/User/users-repository'
import { PrismaService } from '../prisma.service'
import { PrismaUserRepository } from './prisma-user-repository'

@Module({
  providers: [
    PrismaService,
    { provide: UsersRepository, useClass: PrismaUserRepository },
  ],
  exports: [{ provide: UsersRepository, useClass: PrismaUserRepository }],
})
export class UserDatabaseModule {}
