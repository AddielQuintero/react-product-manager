import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { Home, Login, Product, ProductDetails, Profile, NotFound } from './pages'
import { AppProvider, AuthRoute } from './context'
import { NavigateProps } from './types'

const navigation: NavigateProps = [
  { name: 'Home', to: '/', private: false },
  { name: 'Product', to: '/product', private: false },
  { name: 'Profile', to: '/profile', private: true },
]

export default function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <HashRouter>
        <AppProvider>
          <Header navigation={navigation} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:slug" element={<ProductDetails />} />
            <Route path="/profile" element={<AuthRoute><Profile /></AuthRoute>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer navigation={navigation} />
        </AppProvider>
      </HashRouter>
    </div>
  )
}
