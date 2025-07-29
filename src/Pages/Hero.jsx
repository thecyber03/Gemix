import React from 'react'
import Navbar from '../Pages/Navbar.jsx';
import AboutPage from '../Pages/AboutPage.jsx';
import SearchPage from '../Pages/SearchPage.jsx';

function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-black text-white flex flex-col items-center justify-center p-12">

      <Navbar/>
      <SearchPage/>
      <AboutPage/>

    </div>
  )
}

export default Hero