import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contect from './Components/Contect/Contect'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div translate="no">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contect/>
      <Footer/>
    </div>
  )
}

export default App