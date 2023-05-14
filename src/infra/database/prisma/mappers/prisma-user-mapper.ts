import { User } from '@app/entities/User/user.entity'

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      role: user.role,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
      admin: user.admin,
      organizationId: user.organizationId,
      customerDemandId: user.customerDemandId,
    }
  }
}
