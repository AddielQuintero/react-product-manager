import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TProduct } from '../types'

//const baseURL = 'https://api.escuelajs.co/api/v1/products/55'
const baseURL = 'http://localhost:3000/data'

export const ProductService = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  const getProducts = async () => {
    const { data } = await axios.get(baseURL)
    // console.log(`hice un getProduct: `, data)
    setProducts(data)
  }

  const addProduct = async (newProduct: TProduct) => {
    await axios.post(baseURL, newProduct)
    console.log(`añadi un product: ${newProduct}`)
    await getProducts()
  }

  const deleteProduct = async (productId: string | number) => {
    await axios.delete(`${baseURL}/${productId}`)
    console.log(`delete un product: ${productId}`)
    await getProducts()
  }

  const updateProduct = async (updatedProduct: TProduct) => {
    await axios.put(`${baseURL}/${updatedProduct.id}`, updatedProduct)
    console.log(`delete un product: ${updatedProduct}`)
    await getProducts()
  }

  useEffect(() => {
    getProducts().then()
  }, [])

  return {
    products,
    addProduct,
    deleteProduct,
    updateProduct,
  }
}

// export const ProductService = () => {
//   const [products, setProducts] = useState(null)

// useEffect(() => {
// const fetchPosts = async () => {
//   const { data } = await axios.get(baseURL)
//   console.log(`hice un getProduct: `, data)
//   setProducts(data)
// }

//   fetchPosts()
// }, [])

//   async function getProducts() {
//     const { data } = await axios.get(baseURL)
//     setProducts(data)
//   }

//   async function addProduct({ newProduct }: any) {
//     await axios.post(baseURL, newProduct)
//     await getProducts()
//   }

//   async function deleteProduct({ productId }: any) {
//     await axios.delete(`${baseURL}/${productId}`)
//     await getProducts()
//   }

//   async function updateProduct({ updatedProduct }: any) {
//     await axios.put(`${baseURL}/${updatedProduct.id}`, updatedProduct)
//     await getProducts()
//   }

//   useEffect(() => {
//     getProducts()
//   }, [])

//   return { products, addProduct, deleteProduct, updateProduct }
// }
