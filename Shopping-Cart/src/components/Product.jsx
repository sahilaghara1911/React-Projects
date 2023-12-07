import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast';
import { add, remove } from '../redux/slice/CartSlice';

const Product = ({post}) => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart")
  }

  const removeToCart = () => {
    dispatch(remove(post.id));
    toast.error("Item remove from cart")
  }

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 duration-300 transition-all ease-in shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] p-4 gap-3 mt-10 ml-5 rounded-xl'>
      <div>
        <p className='text-gray-700 font-semibold text-lg truncate w-40 mt-1 text-left'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + '...'}</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} className='h-full w-full'/>
      </div>
      <div className='flex justify-between gap-14 w-full items-center mt-5'>
      <div>
        <p className='text-green-600 font-semibold'>${post.price}</p>
      </div>
        
          {
            cart.some((p) => p.id == post.id) ? (
              <button onClick={removeToCart} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in'>Remove Item</button>
            ) :
            (
              <button onClick={addToCart} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in'>Add to Cart</button>
            )
          }
        
      </div>
      
    </div>
  )
}

export default Product