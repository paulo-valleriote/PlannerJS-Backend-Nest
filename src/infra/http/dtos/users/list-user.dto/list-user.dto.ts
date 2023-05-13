export class ListUserDto {
  name: string
  role: string
  email: string
  password: string
  admin: boolean
  createdAt: Date
  organizationId?: string | null
  customerDemandId?: string[] | null
}
