import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 h-screen'>
      <h1 className='text-5xl font-bold text-center leading-tight'>Welcome to Smart Cart</h1>
      <Link className='p-2 px-8 border-2 border-black hover:border-green-600 hover:bg-green-800 hover:text-white font-semibold text-lg rounded-3xl'  to={"/login"}>Login</Link>
    </div>
  )
}

export default Home