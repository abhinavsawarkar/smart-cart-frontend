import React from 'react'

const Button = ({type , id , text}) => {
  return (
    <button className='mt-6 border-2 border-white w-full py-2 text-sm font-semibold hover:border-green-500 hover:bg-green-700' type={type} id={id}>{text}</button>
  )
}

export default Button