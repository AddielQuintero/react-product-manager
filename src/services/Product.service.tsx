import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TAddProduct, TProduct } from '@/types'
import { CONFIG } from '@config'

export const ProductService = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(`${CONFIG.API_BASE}/data?_page=46&_limit=5`)
        setProducts(data)
      } catch (error) {
        console.error(`Error in getProduct ${error}`)
      }
    }

    getProducts().then()
  }, [])

  const addProduct = async (newProduct: TAddProduct) => {
    try {
      const { data } = await axios.post(`${CONFIG.API_BASE}/data`, newProduct)
      setProducts([...products, data])
      console.log(`added correctly: ${newProduct}`)
    } catch (error) {
      console.error('Error in adding product:', error)
    }
  }

  const deleteProduct = async (productId: string | number) => {
    try {
      await axios.delete(`${CONFIG.API_BASE}/data/${productId}`)
      setProducts(products.filter((product) => product.id !== productId))
    } catch (error) {
      console.error(error)
    }
  }

  const updateProduct = async (updatedProduct: TProduct) => {
    try {
      const { data } = await axios.put(`${CONFIG.API_BASE}/data/${updatedProduct.id}`, updatedProduct)
      setProducts((prevState) =>
        prevState.map((product) => (product.id === updatedProduct.id ? data : product))
      )
      console.log(`update product correctly: `)
    } catch (error) {
      console.error('Error in update product:', error)
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
