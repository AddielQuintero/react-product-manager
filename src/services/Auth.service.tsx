import { useState } from 'react'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import UserService from './User.service'
import {
  TAuthConfig,
  TAuthConfigItem,
  TPermissions,
  TUser,
  DefaultPermissions,
  verifyPermission,
} from '@/types'

export const AuthService = () => {
  const [user, setUser] = useState<TUser | null>(null)
  const [permissions, setPermissions] = useState<TPermissions>(DefaultPermissions)

  const login = async (userName: string) => {
    try {
      const user: TUser = await UserService.getUser(userName)
      // console.log(user)
      if (user.userName === userName) {
        const permission = verifyPermission(user)
        // console.log(permission)
        setPermissions(permission)
        setUser(user)
      }
    } catch (error) {
      console.error(`authError: ${error}`)
      throw new Error('Invalid credentials')
    }
  }

  const logout = () => {
    setUser(null)
    setPermissions(DefaultPermissions)
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
      icon: <ArrowRightOnRectangleIcon className="h-4 w-6 inline-block" aria-hidden="true" />,
    },
  }

  const AuthConfigItem: TAuthConfigItem = !user ? AuthConfig.loggedIn : AuthConfig.loggedOut

  // const auth: Auth = {
  //   user,
  //   permissions,
  //   AuthConfigItem,
  //   login,
  //   logout,
  // }

  // console.log(auth)
  // return auth
  return { user, permissions, AuthConfigItem, login, logout }
}
