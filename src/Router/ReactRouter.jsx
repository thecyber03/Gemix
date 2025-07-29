import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import Hero from '../Pages/Hero.jsx'
import TicTacToe from '../Pages/TicTacToe.jsx';
import RockPaperScissors from '../Pages/RockPaperScissors.jsx';
import Profile from '../Pages/Profile.jsx';
import Navbar from '../Pages/Navbar.jsx';
import Likes from '../Pages/Likes.jsx';
import AboutPage from '../Pages/AboutPage.jsx';
import SearchPage from '../Pages/SearchPage.jsx';



export default function ReactRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hero" element={<Hero/>}/>
        <Route path="/tictac" element={<TicTacToe/>}/>
        <Route path="/rockpaperscissor" element={<RockPaperScissors/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  )
}