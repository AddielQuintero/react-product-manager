import { DefaultAuthConfigItem, TAuthConfigItem } from './Auth.type'
import { TAddProduct, TProduct } from './Product.type'
import { DefaultPermissions, TPermissions, TUser } from './User.type'

export interface AppChildrenProps {
  children: React.ReactNode
}

export interface TAppContext {
  user: TUser | null
  permissions: TPermissions
  AuthConfigItem: TAuthConfigItem
  products: TProduct[]
  login: (userName: string) => void
  logout: () => void
  handleAddProduct: (newProduct: TAddProduct) => void
  handleDeleteProduct: (productId: string | number) => void
  handleUpdateProduct: (updatedProduct: TProduct) => void
}

export const DefaultContext = {
  user: null,
  products: [],
  permissions: DefaultPermissions,
  AuthConfigItem: DefaultAuthConfigItem,
  login: () => {},
  logout: () => {},
  handleAddProduct: () => {},
  handleDeleteProduct: () => {},
  handleUpdateProduct: () => {},
}
