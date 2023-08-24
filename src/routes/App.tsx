import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer, ProductDetails } from '@/components'
import { Home, Login, Product, Profile, NotFound } from '@/pages'
import { AppProvider, AuthRoute } from '@/context'
import { navigation } from '@/types'

export const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <BrowserRouter>
        <AppProvider>
          <Header navigation={navigation} />

          <Routes>
            <Route path="/" element={<Product />} index />
            <Route path="/product/:slug" element={<ProductDetails />} />
            <Route path="/profile" element={<AuthRoute><Profile /></AuthRoute>}/>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer navigation={navigation} />
        </AppProvider>
      </BrowserRouter>
    </div>
  )
}
