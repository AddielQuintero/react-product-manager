import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TAddProduct, TProduct } from '../types'
import { CustomSnackBar } from '../components'

const BASE_URL = 'http://localhost:3000/data'
// const BASE_URL = 'https://api-json-server-omega.vercel.app/data'

export const ProductService = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        // const { data } = await axios.get(`${baseURL}?_page=1&_limit=5`)
        const { data } = await axios.get(`${BASE_URL}?_page=46&_limit=5`)
        setProducts(data)
      } catch (error) {
        console.error(`mi error ${error}`)
      }
    }

    getProducts().then()
  }, [])

  const addProduct = async (newProduct: TAddProduct) => {
    try {
      const { data } = await axios.post(BASE_URL, newProduct)
      setProducts([...products, data])
      console.log(`se añadió el product correctamente: ${newProduct}`)
    } catch (error) {
      console.error('Error al agregar el producto:', error)
    }
  }

  const deleteProduct = async (productId: string | number) => {
    try {
      await axios.delete(`${BASE_URL}/${productId}`)
      setProducts(products.filter((product) => product.id !== productId))
    } catch (error) {
      console.error(error)
    }
  }

  const updateProduct = async (updatedProduct: TProduct) => {
    try {
      const { data } = await axios.put(`${BASE_URL}/${updatedProduct.id}`, updatedProduct)
      setProducts((prevState) =>
        prevState.map((product) => (product.id === updatedProduct.id ? data : product))
      )
      console.log(`se actualizo el product correctamente: `)
    } catch (error) {
      console.error('Error al actualizar el producto:', error)
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
