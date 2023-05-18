interface UsersListViewModel {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
  admin: boolean
  customerDemands?: object[]
  organization?: object
}

export class UsersList {
  toGeneralViewModel(users: any[]): UsersListViewModel[] {
    const formatedUsers = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        admin: user.admin,
      }
    })

    return formatedUsers
  }

  toDetailedViewModel(user: any): UsersListViewModel {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
      admin: user.admin,
      customerDemands: user.customerDemands ? user.customerDemands : [],
      organization: { ...user.organization },
    }
  }
}
