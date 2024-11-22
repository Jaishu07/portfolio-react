import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    
  return (
    < >
    <div className='nav'>

    <h3 >👋 Hey</h3>
     <div className='nav-link'>
        <Link className='nav-link' to={'/home'}>Home</Link>
        <Link className='nav-link' to={'/About'}>About</Link>
    </div>
    </div>
    
    </>
   
  )
}

export default Nav
