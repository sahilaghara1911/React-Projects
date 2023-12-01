import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import {Route, Routes, useLocation, useSearchParams} from 'react-router-dom'
import { AppContext } from './context/AppContext'

const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect( () => {
    fetchBlogPosts();
  },[])
  return (
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/blog/:blogId' element = {<BlogPage />}/>
      <Route path='/tags/:tag' element = {<TagPage />}/>
      <Route path='/categories/:category' element = {<CategoryPage />}/>
    </Routes>
  )
}

export default App