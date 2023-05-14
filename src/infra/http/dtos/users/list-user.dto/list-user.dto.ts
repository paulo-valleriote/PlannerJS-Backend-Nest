export class ListUserDto {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
  admin: boolean
  customerDemands?: object[]
  organization?: object
}
