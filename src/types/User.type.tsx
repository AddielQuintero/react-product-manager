export interface TUser {
  id: number
  userName: string | null 
  role: 'admin' | 'editor' | 'student'
}

export interface TPermissions {
  add: boolean
  edit: boolean
  deleted: boolean
  author?: boolean
}

export const DefaultPermissions: TPermissions = {
  add: false,
  edit: false,
  deleted: false,
  author: false,
}

export const permissions: Record<TUser['role'], TPermissions> = {
  admin: {
    add: true,
    edit: true,
    deleted: true,
  },
  editor: {
    add: false,
    edit: true,
    deleted: false,
  },
  student: {
    add: true,
    edit: false,
    deleted: false,
  },
}

export function verifyPermission(user: TUser): TPermissions {
  console.log(user)
  console.log(permissions[user.role])
  return permissions[user.role]
}
