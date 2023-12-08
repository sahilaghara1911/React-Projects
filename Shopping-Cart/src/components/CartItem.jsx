import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slice/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed")
  }
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col md:flex-row md:p-3 gap-5 items-center'>
        <div className='w-[30%]'>
          <img src={item.image} className='object-cover' />
        </div>
        <div className='md:ml-10 self-start space-y-5 w-full md:w-[70%]'>
          <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
          <h1 className='text-base text-slate-700 font-medium'>{item.description}</h1>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-lg text-green-600'>${item.price}</p>
            <div onClick={removeFromCart} className='className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"'>
              <MdDeleteForever />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem