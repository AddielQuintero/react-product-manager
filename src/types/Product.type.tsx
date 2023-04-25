import { Auth } from './Auth.type'
import { HookDialogProps } from './Dialog.type'
import { TPermissions } from './User.type'

export interface TCategory {
  id: number
  image: string
  name: string
  creationAt: Date
  updatedAt: Date
}

export interface TProduct {
  id: number
  slug: string
  author: string
  title: string
  price: number
  description: string
  category: TCategory
  images?: string[]
  creationAt?: Date
  updatedAt?: Date
}

export type AuthorizePostActionsProps = (auth: Auth, product: TProduct) => TPermissions

export const AuthorizePostActions: AuthorizePostActionsProps = (auth, product) => {
  const { add, edit, deleted } = auth.permissions
  // console.log(`author ${product.author}`)
  // console.log(`username ${auth.user?.userName}`)
  const author = auth.user?.userName && product.author ? auth.user?.userName === product.author : false
  return { add, edit, deleted, author }
}

export interface TFormValues {
  // id: number
  title: string
  author: string
  price: number
  categoryName: string
  description: string
}

export const DefaultFormValues = {
  // id: 0,
  title: '',
  author: '',
  price: 0,
  categoryName: '',
  description: '',
}

export interface ProductDialogProps extends HookDialogProps {
  product: TProduct | null
  setProduct: (value: null) => void
}
