import React, { useContext } from 'react'
import Spinner from './Spinner'
import { AppContext } from '../context/AppContext'

const Blogs = () => {

  //consume
  const {loading, posts} = useContext(AppContext)
  return (
    <div className='w-11/12 max-w-[652px] py-8 flex flex-col gap-y-7 mx-auto mt-16 mb-[70px]'>
      {
        loading ? (<Spinner />) : 
        (
          
            posts.length === 0 ?
            (<div>No Post Found</div>)
            :
            (posts.map( (post) => (
              <div key={post.id}>
                <p className='font-bold text-lg'>{post.title}</p>
                <p className='text-[15px]'>
                  By <span className='italic text-sm'>{post.author}</span> on <span className='font-bold underline'>{post.category}</span>
                </p>
                <p className='text-[15px] '>Posted on {post.date}</p>
                <p className='mt-2'>{post.content}</p>
                <div className='flex gap-x-3'>
                {
                  post.tags.map( (tag, index) => {
                    return <span key={index} className='text-blue-500 underline font-bold text-[12px]'>{` #${tag} `}</span>
                  })
                }
                </div>
              </div>
            )))
          
        )
      }
    </div>
  )
}

export default Blogs