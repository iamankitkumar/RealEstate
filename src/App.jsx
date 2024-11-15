import React from 'react'
import Navbar from './Conponents/Navbar'
import Header from './Conponents/Header'
import About from './Conponents/About'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
    </div>
  )
}

export default App