import React from 'react'
import Heading from './components/Heading'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className='w-full flex flex-col h-screen background relative items-center'>
      <Heading />
      <div className='flex flex-col w-full items-center mt-7 gap-y-10'>
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App
