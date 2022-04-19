import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({num , path}) => {
  return (
    <li><Link to={path}>NavItem {num}</Link></li>
  )
}

export default NavItem