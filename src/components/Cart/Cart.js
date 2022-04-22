import React from 'react'
import AppWrapper from '../UI/AppWrapper'
import CartRightPanel from './CartRightPanel'
import ProductList from '../Product/ProductList'
import CartBottomPanel from './CartBottomPanel'

const Cart = () => {
  return (
    <AppWrapper>
      <div className='h-screen mx-5 py-4 flex'>
        <div className='basis-2/3 px-2 flex flex-col '>
          <div className='border-b-2 border-b-[#333] p-2'>
            <img className='w-7 ' src="./smart-cart 1.png" alt="Logo small"/>
          </div>
          <ProductList />
          <CartBottomPanel />
        </div>
        <CartRightPanel/>
      </div>
    </AppWrapper>
  )
}

export default Cart