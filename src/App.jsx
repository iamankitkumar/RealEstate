import React from 'react'
import Navbar from './Conponents/Navbar'
import Header from './Conponents/Header'
import About from './Conponents/About'
import Projects from './Conponents/Projects'
import Testimonails from './Conponents/Testimonails'
import Contact from './Conponents/Contact'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
      <Testimonails/>
      <Contact/>
    </div>
  )
}

export default App