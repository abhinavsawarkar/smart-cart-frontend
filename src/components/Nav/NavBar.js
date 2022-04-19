import React from 'react'
import NavItem from './NavItem'

const NavBar = () => {
  return (
   <nav>
       <ul>
           <NavItem num={1} path={"navitem1"}/>
           <NavItem/>
           <NavItem/>
       </ul>
   </nav>
  )
}

export default NavBar