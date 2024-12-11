import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/Navbar.css'
const Navbar = () => {
  return (
    <div className='navBar'>
     <NavLink to={"/"} className= 'navComponents'>Home</NavLink>
     <NavLink to={"/memos"} className= 'navComponents'>Memos</NavLink>
    </div>
  )
}

export default Navbar
