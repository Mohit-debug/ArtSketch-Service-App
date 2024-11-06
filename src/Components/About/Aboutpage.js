import React from 'react'
import Navbar from '../Navbar'
import About from './About'

const Aboutpage = () => {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="pt-16">
        <About />
      </div>
    </>
  )
}

export default Aboutpage
