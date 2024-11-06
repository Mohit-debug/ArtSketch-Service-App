import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner';

const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="pt-16">
      <Banner />
    </div>
    </>)
}

export default Home;
