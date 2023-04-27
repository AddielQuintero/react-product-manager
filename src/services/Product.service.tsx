import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TAddProduct, TProduct } from '../types'

// const baseURL = 'https://api.escuelajs.co/api/v1/products'
// const baseURL = 'http://localhost:3000/data'
const baseURL = 'https://api-json-server-omega.vercel.app/data'

export const ProductService = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(`${baseURL}?_page=1&_limit=5`)
        setProducts(data)
      } catch (error) {
        console.error(`mi error ${error}`)
      }
    }

    getProducts().then()
  }, [])

  const addProduct = async (newProduct: TAddProduct) => {
    try {
      const { data } = await axios.post(baseURL, newProduct)
      console.log(`añadi un product: ${newProduct}`)
      setProducts([...products, data])
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      const alerta = document.createElement('div');
      alerta.classList.add('bg-black', 'text-white', 'py-4', 'px-4', 'fixed', 'bottom-0', 'left-0', 'right-0', 'z-10');
      alerta.textContent = 'Hubo un error al agregar el producto. Por favor inténtelo de nuevo más tarde.';
      document.body.appendChild(alerta);
    }
  }

  const deleteProduct = async (productId: string | number) => {
    try {
      await axios.delete(`${baseURL}/${productId}`)
      setProducts(products.filter((product) => product.id !== productId))
    } catch (error) {
      console.error(error)
    }
  }

  const updateProduct = async (updatedProduct: TProduct): Promise<void> => {
    try {
      const { data } = await axios.put(`${baseURL}/${updatedProduct.id}`, updatedProduct)
      setProducts((prevState) =>
        prevState.map((product) => (product.id === updatedProduct.id ? data : product))
      )
    } catch (error) {
      console.error(error)
    }
  }

  return { products, addProduct, deleteProduct, updateProduct }
}

// export const ProductService = () => {
//   const [products, setProducts] = useState<TProduct[]>([])

//   const getProducts = async () => {
//     const { data } = await axios.get(baseURL)
//     setProducts(data)
//   }

//   const addProduct = async (newProduct: TProduct) => {
//     await axios.post(baseURL, newProduct)
//     console.log(`añadi un product: ${newProduct}`)
//     await getProducts()
//   }

//   const deleteProduct = async (productId: string | number) => {
//     await axios.delete(`${baseURL}/${productId}`)
//     console.log(`delete un product: ${productId}`)
//     await getProducts()
//   }

//   const updateProduct = async (updatedProduct: TProduct) => {
//       await axios.put(`${baseURL}/${updatedProduct.id}`, updatedProduct)
//       console.log(updatedProduct)
//       await getProducts()
//   }

//   useEffect(() => {
//     getProducts().then()
//   }, [])

//   return { products, addProduct, deleteProduct, updateProduct }
// }
