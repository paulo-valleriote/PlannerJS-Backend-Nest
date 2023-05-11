export class User {
  id: string
  name: string
  role: string
  email: string
  password: string
  createdAt: Date
  admin: boolean
  organizationId: string
  customerDemandId: string[]
}
