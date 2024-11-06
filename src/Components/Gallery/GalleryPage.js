import React from 'react'
import Navbar from '../Navbar'
import Gallery from './Gallery'

const GalleryPage = () => {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="pt-16">
        <Gallery/>
      </div>
    </>
  )
}

export default GalleryPage
