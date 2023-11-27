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
            (posts.map( (post) => (<Card />)))
          
        )
      }
    </div>
  )
}

export default Blogs