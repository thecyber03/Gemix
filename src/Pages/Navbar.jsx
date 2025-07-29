import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
   const [userName, setUserName] = useState('');
  const [userDP, setUserDP] = useState('');

  const toggleAlif = () => {
    setIsOpen(!isOpen);
  };

    useEffect(() => {
    setUserName(localStorage.getItem('userName') || 'Player');
    setUserDP(localStorage.getItem('userDP') || '');
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full h-12 px-4 z-50 flex items-center justify-between bg-gradient-to-br from-slate-800 to-black shadow">
      
      {/* Left Rounded Div
      <div className="w-8 h-8 bg-red-500 rounded-full"></div> */}

        {/* 👤 User Info */}
      <Link to='/profile'>
      <div className=" ">
  {userDP ? (
    <img
      src={userDP}
      alt="User DP"
      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-red-600 object-cover"
    />
  ) : (
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-brshadow-sm  bg-[#0f2027]  flex items-center justify-center text-xl text-white">👤</div>
  )}
  <p className="text-sm text-green-300 font-semibold mt-1">{}</p>
</div></Link>
   

      {/* Center Codex Text */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/" className="text-2xl text-red-600 font-[Aquire]">Gemix</Link>
      </div>

      {/* Right Toggle */}
      <div onClick={toggleAlif} className="h-full mr-2 flex flex-col justify-center items-center cursor-pointer">
        <span className={`font-[Aref] text-black text-2xl leading-[4px] scale-y-[2.5] transition-all duration-500 ease-in-out
         ${isOpen ? 'rotate-45' : 'rotate-90'}`}>ا</span>

        <span className={`font-[Aref] text-black text-2xl leading-[4px] scale-y-[2.5] transition-all duration-500 ease-in-out 
         ${isOpen ? '-rotate-45' : 'rotate-90'}`}>ا</span>
      </div>

      {/* Slide-down Menu */}
      <div className={`fixed left-0 w-full h-[55vh] md:h-[60vh] bg-[#0f2027] rounded-t-2xl transition-all duration-500 ease-in-out flex flex-col justify-between
        ${isOpen ? 'bottom-0' : '-bottom-[80vh]'}`}>

        {/* Nav menu section */}
       <div onClick={() => setIsOpen(false)} className="p-8 text-white flex flex-col text-5xl font-[ClashDisplay]">
  <Link to="/hero">Home</Link>

  {!userDP && (
    <Link to="/profile">Login</Link>
  )}

  {userDP && (
    <>
      <Link to="/ticTac">TicTac</Link>
      <Link to="/rockpaperscissor">R P S</Link>
      <Link to="/likes">Likes</Link>
      <button
        onClick={() => {
          localStorage.removeItem('userName');
          localStorage.removeItem('userDP');
          setUserName('');
          setUserDP('');
          setIsOpen(false);
        }}
        className="text-left text-red-600 hover:text-red-800 transition duration-300"
      >
        Logout
      </button>
    </>
  )}
</div>


        {/* Contact section */}
        <div className="p-8 text-[10px] text-white">
          <a href="mailto:abdulaziz86723@gmail.com">ABDULAZIZ86723@GMAIL.COM</a> <br />
          <a href="https://www.instagram.com/the_cyber_03">INSTAGRAM</a>
        </div>
      </div>
    </nav>
  );
}
