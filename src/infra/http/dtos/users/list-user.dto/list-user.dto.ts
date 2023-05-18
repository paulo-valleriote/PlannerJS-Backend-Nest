export class ListUserDto {
  id: string
  name: string
  email: string
  createdAt: Date
  admin: boolean
  customerDemands?: object[]
  organization?: object
}
