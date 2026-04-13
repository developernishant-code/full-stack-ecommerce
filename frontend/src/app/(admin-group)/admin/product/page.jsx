import { getProduct } from '@/api/Product'
import ProductTableClient from '@/components/admin/ProductTableClient'
import React from 'react'

export default async function ProductTable() {
  const product = await getProduct()
  
  return (
    <ProductTableClient product={product.allProduct} />
  )
}
