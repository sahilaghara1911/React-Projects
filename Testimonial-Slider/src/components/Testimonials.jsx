import React, { useState } from 'react'
import Card from './Card'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'

const Testimonials = ({reviews}) => {
const [index, setIndex] = useState(0);

  function leftClickhandler(){
    if(index - 1 < 0){
      setIndex(reviews.length -1);
    }
    else{
      setIndex(index -1)
    }
  }

  function rightClickhandler(){
    if(index + 1 >= reviews.length) {
      setIndex(0)
    }
    else{
      setIndex(index+1)
    }
  }

  function surpiseHandler(){
    let randomIndex = Math.floor((Math.random() * reviews.length));
    setIndex(randomIndex)
  }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col items-center justify-center mt-10 p-10 transition-all duration-700  hover:shadow-xl rounded-md'>
        <Card review={reviews[index]}></Card>
        <div className='flex text-3xl justify-center items-center mt-9 gap-3 font-bold text-violet-400'>
            <button
            onClick={leftClickhandler} 
            className='cursor-pointer hover:text-violet-500 transition-all duration-200'>
                <FiChevronLeft />
            </button>
            <button 
            onClick={rightClickhandler} 
            className='cursor-pointer hover:text-violet-500 transition-all duration-200'>
                <FiChevronRight />
            </button>
        </div>

        <div>
            <button 
            onClick={surpiseHandler}
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer py-2 px-10 rounded-md font-bold text-white mt-4'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}

export default Testimonials