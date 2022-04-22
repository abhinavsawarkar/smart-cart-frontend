import React from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {
  return (
    <ul className='basis-full overflow-y-scroll scroll-m-0'>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </ul>
  )
}

export default ProductList