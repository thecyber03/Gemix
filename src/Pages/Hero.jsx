import React from 'react'
import Navbar from '../Pages/Navbar.jsx';

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat ">

      <Navbar/>
    </div>
  )
}

export default Hero