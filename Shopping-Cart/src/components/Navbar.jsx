import {FaShoppingCart} from 'react-icons/fa'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row justify-between'>
          <img src='https://pbs.twimg.com/profile_images/1695709925769728000/4Zp_XHFU_400x400.jpg'/>
          <div>
            <p className='text-red-600'>Home</p>
            <FaShoppingCart />
          </div>
      </div>
    </div>
  )
}

export default Navbar