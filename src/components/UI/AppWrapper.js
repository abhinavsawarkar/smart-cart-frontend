import React from 'react'

const AppWrapper = (props) => {
  return (
    <div className=' sm:max-w-[960px] sm:mx-5 xl:mx-auto'>{props.children}</div>
  )
}

export default AppWrapper