export interface TUser {
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

export function getRole(user: TUser): TPermissions {
  return permissions[user.role]
}
