import React, { useContext } from 'react'
import Spinner from './Spinner'
import { AppContext } from '../context/AppContext'

const Blogs = () => {

  //consume
  const {loading, posts} = useContext(AppContext)
  return (
    <div>
      {
        loading ? (<Spinner />) : 
        (
          
            posts.length === 0 ?
            (<div>No Post Found</div>)
            :
            (posts.map( (post) => (
              <div>
                <p>{post.title}</p>
                <p>
                  By <span>{post.author}</span> on <span>{post.category}</span>
                </p>
              </div>
            )))
          
        )
      }
    </div>
  )
}

export default Blogs