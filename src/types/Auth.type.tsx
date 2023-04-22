import { TPermissions, TUser } from './User.type'

export interface TAuthConfigItem {
  to: string
  linkText: string
  handleClick?: () => void
  icon: React.ReactNode
}

export interface TAuthConfig {
  loggedIn: TAuthConfigItem
  loggedOut: TAuthConfigItem
}

export const DefaultAuthConfigItem: TAuthConfigItem = {
  to: '/login',
  linkText: 'Log in',
  handleClick: undefined,
  icon: <span aria-hidden="true">&rarr;</span>,
}

export interface Auth {
  user: TUser | null
  permissions: TPermissions
  AuthConfigItem: TAuthConfigItem
  login: (userName: string | null) => void
  logout: () => void
}
