import React from 'react'
import Navbar from './Conponents/Navbar'
import Header from './Conponents/Header'
import About from './Conponents/About'
import Projects from './Conponents/Projects'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App