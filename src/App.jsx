import React from 'react'
import Navbar from './Conponents/Navbar'
import Header from './Conponents/Header'
import About from './Conponents/About'
import Projects from './Conponents/Projects'
import Testimonails from './Conponents/Testimonails'
import Contact from './Conponents/Contact'
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Conponents/Footer'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonails/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App