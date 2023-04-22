import { createContext, useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { TAppContext, DefaultContext, AppChildrenProps } from '../types'
import { AuthService, ProductService } from '../services'

const AppContext = createContext<TAppContext>(DefaultContext)

const AppProvider = ({ children }: AppChildrenProps) => {
  const { user, permissions, AuthConfigItem, login, logout } = AuthService()
  const { products, addProduct, deleteProduct, updateProduct } = ProductService()

  const handleDeleteProduct = (productId: string | number) => {
    deleteProduct(productId).then()
  }

  const app: TAppContext = {
    user,
    permissions,
    products,
    AuthConfigItem,
    login,
    logout,
    handleDeleteProduct,
  }

  // console.log(products[0])

  return <AppContext.Provider value={app}>{children}</AppContext.Provider>
}

const useApp = (): TAppContext => {
  const app = useContext(AppContext)
  return app
}

const AuthRoute = ({ children }: AppChildrenProps) => {
  const app = useApp()
  return !app?.user ? <Navigate to="/login" /> : <>{children}</>
}

export { AppProvider, useApp, AuthRoute }
