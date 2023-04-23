import { useState } from 'react'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import {
  TAuthConfig,
  TAuthConfigItem,
  TPermissions,
  TUser,
  DefaultPermissions,
  getRole,
} from '../types'

const users: TUser[] = [
  { userName: 'admin', role: 'admin' },
  { userName: 'user', role: 'student' },
  { userName: 'a', role: 'admin' },
  { userName: 'juandc', role: 'student' },
  { userName: 'alex', role: 'editor' },
]

export const AuthService = () => {
  const [user, setUser] = useState<TUser | null>(null)
  const [permissions, setPermissions] =
    useState<TPermissions>(DefaultPermissions)

  const login = (userName: string | null) => {
    const user = users.find((user) => user.userName === userName)
    if (user) {
      const permission = getRole(user)
      setPermissions(permission)
      setUser(user)
    }
  }

  const logout = () => {
    setUser(null)
  }

  const AuthConfig: TAuthConfig = {
    loggedIn: {
      to: '/login',
      linkText: 'Log in',
      handleClick: undefined,
      icon: <span aria-hidden="true">&rarr;</span>,
    },

    loggedOut: {
      to: '/login',
      linkText: 'Log out',
      handleClick: logout,
      icon: (
        <ArrowRightOnRectangleIcon
          className="h-4 w-6 inline-block"
          aria-hidden="true"
        />
      ),
    },
  }

  const AuthConfigItem: TAuthConfigItem = !user
    ? AuthConfig.loggedIn
    : AuthConfig.loggedOut

  // const auth: Auth = {
  //   user,
  //   permissions,
  //   AuthConfigItem,
  //   login,
  //   logout,
  // }

  // return auth
  return { user, permissions, AuthConfigItem, login, logout }
}
