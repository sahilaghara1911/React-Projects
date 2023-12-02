import {FaShoppingCart} from 'react-icons/fa'
import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <NavLink to='/'>
          <div>
            <img src='./public/logo.png' width={50} height={50}/>
          </div>
        </NavLink>
        <div>
          <NavLink to='/'>
            <p className='text-red-600'>Home</p>
          </NavLink>
          <NavLink to='/cart'>
            <div>
            <FaShoppingCart />
            </div>
          </NavLink>
            
          </div>
      </div>
    </div>
  )
}

export default Navbar