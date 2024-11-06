import React from 'react';
import backgroundImage from '../assets/pngegg4.png';
import { FaInstagram } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center pt-20">
        <span className="font-serif text-5xl md:text-6xl lg:text-8xl whitespace-nowrap dark:text-gray-100">Art by Aman</span>
      </div>
      <div className="relative text-center pt-10">
        <span className="font-serif text-2xl md:text-3xl lg:text-4xl whitespace-nowrap dark:text-gray-100">Digital Artist</span>
      </div>
      <div className="relative flex justify-center pt-10 space-x-4">
        <a href="https://www.instagram.com/sketcherwell/?igsh=ejMwZ3g4dW95bnU%3D" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-blue-500">
          <FaInstagram size={40} />
        </a>
      </div>
    </div>
  );
}

export default Banner;
