import React from 'react'
import Card from './Card'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'

const Testimonials = ({reviews}) => {
  return (
    <div>
        <Card review={reviews[0]}></Card>
        <div className='flex text-3xl justify-center items-center mt-5 gap-3 font-bold text-violet-400'>
            <button className='cursor-pointer hover:text-violet-500 transition-all duration-200'>
                <FiChevronLeft />
            </button>
            <button className='cursor-pointer hover:text-violet-500 transition-all duration-200'>
                <FiChevronRight />
            </button>
        </div>

        <div>
            <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer py-2 px-10 rounded-md font-bold text-white'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}

export default Testimonials