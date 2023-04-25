import { DefaultAuthConfigItem, TAuthConfigItem } from './Auth.type'
import { TProduct } from './Product.type'
import { DefaultPermissions, TPermissions, TUser } from './User.type'

export interface AppChildrenProps {
  children: React.ReactNode
}

export interface TAppContext {
  user: TUser | null
  permissions: TPermissions
  AuthConfigItem: TAuthConfigItem
  products: TProduct[]
  login: (userName: string | null) => void
  logout: () => void
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
  handleDeleteProduct: () => {},
  handleUpdateProduct: () => {},
}
