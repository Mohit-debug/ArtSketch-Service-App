import React from 'react'
import Navbar from '../Navbar'
import Event from './Event'

const Eventpage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='pt-16'>
        <Event />
      </div>
    </>
  )
}

export default Eventpage
