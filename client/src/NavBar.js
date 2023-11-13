import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <NavLink to='/'>Profile|</NavLink>
        <NavLink to='/movies'>My Movies</NavLink>
    </div>
  )
}

export default NavBar