import React from 'react'
import {UserIcon} from "@heroicons/react/solid"


const UserInfo = (props)=>{
    return(
        <div className='flex items-center justify-evenly px-4 pt-16'>
            <div className='flex items-center justify-center w-16 h-16 shrink-0 bg-white rounded-full'>
                <UserIcon className="h-9 w-9"/>
            </div>
            <p className='text-white font-semibold text-lg'>+917719909323</p>
        </div>
    )
}

const CTAGroup = (props)=>{
    return <div className='flex flex-col px-6 text-white gap-y-3 mt-auto mb-4'>
        <button type='submit' className="w-full bg-green-700 py-2 text-lg font-semibold rounded-md">Checkout</button>
        <button type="submit" className="w-full bg-red-700 py-2 text-lg font-semibold rounded-md">Cancel Cart</button>
    </div>
}

const CartRightPanel = () => {
  return (
    <div className='basis-1/3 bg-[#333] flex flex-col'>
        <UserInfo/>
        <CTAGroup/>
    </div>
  )
}

export default CartRightPanel