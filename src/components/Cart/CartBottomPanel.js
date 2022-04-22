import React from 'react'
import NetWrapper from '../UI/NetWrapper'

const QuantityWrapper = ({text,qnt})=>{
    return <div className='basis-full flex items-center justify-center bg-[#333] py-2 rounded-md gap-x-3'>
        <p className='text-white font-semibold'>{text}</p>
        <NetWrapper>{qnt}</NetWrapper>
    </div>
}

const CartBottomPanel = () => {
  return (
    <div className='mt-auto border-t-2 border-t-[#333] flex items-center justify-center gap-x-5 p-2'>
        <QuantityWrapper text="Total Quantity" qnt="10"/>
        <QuantityWrapper text="Total Amount" qnt="$10"/>
    </div>
  )
}

export default CartBottomPanel