import { createContext, useContext, useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { TAppContext, DefaultContext, AppChildrenProps, TProduct, TAddProduct } from '@/types'
import { AuthService, ProductService } from '@/services'

const AppContext = createContext<TAppContext>(DefaultContext)

const AppProvider = ({ children }: AppChildrenProps) => {
  const { user, permissions, AuthConfigItem, login, logout } = AuthService()
  const { products, addProduct, deleteProduct, updateProduct } = ProductService()

  const handleAddProduct = (newProduct: TAddProduct) => {
    addProduct(newProduct).then()
  }

  const handleDeleteProduct = (productId: string | number) => {
    deleteProduct(productId).then()
  }

  const handleUpdateProduct = (updatedProduct: TProduct) => {
    updateProduct(updatedProduct)
  }

  const app: TAppContext = {
    user,
    permissions,
    products,
    AuthConfigItem,
    login,
    logout,
    handleAddProduct,
    handleDeleteProduct,
    handleUpdateProduct,
  }

  console.log(products)

  return <AppContext.Provider value={app}>{children}</AppContext.Provider>
}

const useApp = (): TAppContext => {
  const app = useContext(AppContext)
  return app
}

const AuthRoute = ({ children }: AppChildrenProps) => {
  const location = useLocation()
  const app = useApp()
  return !app?.user ? (
    <Navigate to="/login" state={{ prevUrl: location.pathname }} replace />
  ) : (
    <>{children}</>
  )
}

export { AppProvider, useApp, AuthRoute }
