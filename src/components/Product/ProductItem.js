import React from 'react'
import NetWrapper from '../UI/NetWrapper'


const ProductImageWrapper = (props)=>{
  return <div className='w-[90px] h-[90px] bg-[#ddd] shrink-0 rounded-md'>{props.children}</div>
}

const ProductItem = ({img, name, mfr, expDate, quantity , price}) => {
  return (
    <li className='w-full flex items-center my-2 gap-x-3 bg-[#333] p-2 text-white rounded-md'>
      <ProductImageWrapper></ProductImageWrapper>
      <div className='flex basis-full'>
        <p className='flex flex-col basis-1/2'>
          <span>Product Name</span>
          <span>Manufacturer</span>
        </p>
        <p className='flex flex-col basis-1/2'>
          <span>Best Before</span>
          <span>1/1/2000</span>
        </p>

      </div>
      <div className="flex items-center justify-center shrink-0 text-[#333] gap-x-2">
        <NetWrapper>x1</NetWrapper>
        <NetWrapper>$10</NetWrapper>
      </div>
    </li>
  )
}

export default ProductItem