import { DefaultAuthConfigItem, TAuthConfigItem } from './Auth.type'
import { DefaultResponse, TAddProduct, TProduct, TResponse } from './Product.type'
import { DefaultPermissions, TPermissions, TUser } from './User.type'

export interface AppChildrenProps {
  children: React.ReactNode
}

export interface TAppContext {
  user: TUser | null
  permissions: TPermissions
  AuthConfigItem: TAuthConfigItem
  products: TProduct[]
  getProducts: (page: number) => Promise<TResponse>
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
  getProducts: () => Promise.resolve(DefaultResponse),
  handleAddProduct: () => {} ,
  handleDeleteProduct: () => {},
  handleUpdateProduct: () => {},
}
