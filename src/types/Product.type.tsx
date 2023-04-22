import { Auth } from './Auth.type'
import { TPermissions } from './User.type'

export interface TProduct {
  id: string | number
  author: string
  title: string
  price: number
  description: string
  category?: TCategory
  images?: string[]
  creationAt?: Date
  updatedAt?: Date
}

export interface TCategory {
  creationAt: Date
  id: number
  image: string
  name: string
  updatedAt: Date
}

export type authorizePostActionsProps = (
  auth: Auth,
  blogpost: TProduct
) => TPermissions

export const authorizePostActions: authorizePostActionsProps = (
  auth,
  blogpost
) => {
  const { add, edit, deleted } = auth.permissions
  // console.log(`author ${blogpost.author}`)
  // console.log(`username ${auth.user?.userName}`)
  const author =
    auth.user?.userName && blogpost.author
      ? auth.user?.userName === blogpost.author
      : false
  return { add, edit, deleted, author }
}
