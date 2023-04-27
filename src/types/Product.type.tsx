import { Auth } from './Auth.type'
import { HookDialogProps } from './Dialog.type'
import { TPermissions } from './User.type'

export interface TSelectCategory {
  id: number
  name: string
}

export interface TCategory {
  id: number
  image: string
  name: string
  creationAt: Date
  updatedAt: Date
}

interface TIdProduct {
  id: number
}
export interface TAddProduct {
  title: string
  price: number
  description: string
  images?: string[]
  category: TCategory
  creationAt: Date
  updatedAt?: Date
  author: string
  slug: string
}

export interface TProduct extends TIdProduct, TAddProduct {}

export type AuthorizePostActionsProps = (auth: Auth, product: TProduct) => TPermissions

export const AuthorizePostActions: AuthorizePostActionsProps = (auth, product) => {
  const { add, edit, deleted } = auth.permissions
  const author = auth.user?.userName && product.author ? auth.user?.userName === product.author : false
  return { add, edit, deleted, author }
}

export interface TFormValues {
  title: string
  price: number
  description: string
  category: {
    name: string
  }
  author: string
}

export type THandleSubmit = (values: TAddProduct | TFormValues) => void

export interface ProductDialogProps extends HookDialogProps {
  add?: string
  product?: TProduct | null
  setProduct?: (value: null) => void
}

export const DefaultFormValues = {
  title: '',
  price: 0,
  description: '',
  category: {
    name: '',
  },
  author: '',
}

export const categories: TSelectCategory[] = [
  { id: 1, name: 'Clothes' },
  { id: 2, name: 'Electronics' },
  { id: 3, name: 'Furniture' },
  { id: 4, name: 'Shoes' },
  { id: 5, name: 'Others' },
]
