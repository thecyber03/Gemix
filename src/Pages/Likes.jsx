import React from 'react'
import Navbar from './Navbar.jsx';

function Likes() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-[url('/error.jpg')] bg-cover bg-center bg-no-repeat text-white">
        <Navbar />

        {/* Overlay text container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-6xl md:text-8xl font-bold drop-shadow-lg">Error 404</h1>
          <p className="text-xl md:text-2xl mt-2 text-red-600">Karyeh pargati pe h !</p>
        </div>
      </div>
    </>
  )
}

export default Likes;
