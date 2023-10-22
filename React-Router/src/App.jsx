import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Support from './components/Support'
import About from './components/About'
import Labs from './components/Labs'
import Notfound from './components/Notfound'


const App = () => {
  return (
    <div className='flex justify-center'>
    <nav className=''>
      <ul className='flex flex-row gap-5'>
        <li>
          <NavLink to="/">Home</NavLink>
          
        </li>
        <li>
          <NavLink to="/support">support</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/labs">labs</NavLink>
        </li>
        
      </ul>
    </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/support' element={<Support />} />
        <Route path='/about' element={<About />} />
        <Route path='/labs' element={<Labs />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      {/* nested route mate home route ne last ma end kari devano  */}
    </div>
  )
}

export default App
