import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav-container'>
      <div className='menu-container'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/category/men'>Mens Clothes</Link></li>
          <li><Link to='/category/woman'>Womans Clothes</Link></li>
                  
        </ul>
      </div>
    </div>
  )
}

export default NavBar