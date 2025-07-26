import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Static Image Background */}
      <img
        src="/public/them.jpg"
        alt="Hero Slide"
        className="absolute w-full h-full object-cover transition-all duration-1000 ease-in-out"
      />

      {/* Top Content */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center pt-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="font-[Aquire] text-white">Welcome to</span>{' '}
          <span className="font-[Aquire] text-red-500">Gemix</span>
        </h1>
        <p className="text-lg mb-6 text-center font-[ClashDisplay] text-gray-400">
          Crack the code, shift the world.
        </p>
      </div>

      {/* Centered Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="relative px-6 py-3 rounded-md font-[ClashDisplay] text-white font-semibold overflow-hidden shadow-xl bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] hover:from-[#485563] hover:to-[#29323c] transform hover:-translate-y-1 hover:scale-105 transition duration-300">
          <Link to="/hero" className="block text-white">Let's play</Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;
