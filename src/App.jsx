import React from 'react'
import Navbar from './Conponents/Navbar'
import Header from './Conponents/Header'
import About from './Conponents/About'
import Projects from './Conponents/Projects'
import Testimonails from './Conponents/Testimonails'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
      <Testimonails/>
    </div>
  )
}

export default App