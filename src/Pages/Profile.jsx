import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [userName, setUserName] = useState('');
  const [userDP, setUserDP] = useState('');
  const [dpPreview, setDpPreview] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    const savedDP = localStorage.getItem('userDP');
    if (savedName) setUserName(savedName);
    if (savedDP) {
      setUserDP(savedDP);
      setDpPreview(savedDP);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserDP(reader.result);
        setDpPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setShowPopup(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !userDP) {
      setShowPopup(true);
      return;
    }
    localStorage.setItem('userName', userName);
    localStorage.setItem('userDP', userDP);
    navigate('/hero');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-slate-900 text-white flex items-center justify-center p-4">
  <form
    onSubmit={handleSubmit}
    className="bg-[#0f2027] w-full max-w-md p-6 rounded- shadow-lg flex flex-col gap-6"
  >
    <h2 className="text-3xl font-[Aquire] text-center text- mb-4">
      👤 Set Your Profile
    </h2>

    {/* Image Upload Section */}
    <label htmlFor="dpInput" className="cursor-pointer flex flex-col items-center">
      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-slate-800 to-black  flex items-center justify-center overflow-hidden border-4 border-blac shadow-md hover:scale-105 transition">
        {dpPreview ? (
          <img src={dpPreview} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <span className="text-4xl">📷</span>
        )}
      </div>
      <span className="mt-2 text-sm text-gray-300 hover:text-white">DP Select Karo</span>
      <input
        type="file"
        id="dpInput"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </label>

    {/* Name Input */}
    <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder="Apna Naam Likhdo"
      className="bg-gradient-to-br from-slate-800 to-black  text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-"
    />

    {/* Submit Button */}
    <button
      type="submit"
      className="relative px-6 py-3 rounded-md font-[ClashDisplay] text-white font-semibold overflow-hidden shadow-xl bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] hover:from-[#485563] hover:to-[#29323c] transform hover:-translate-y-1 hover:scale-105 transition duration-300"
    >
      ✅ Save & Continue
    </button>
  </form>

  {/* 👇 Include this if popup logic added */}
  {showPopup && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-300 rounded-lg p-6 shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold text-red-600 mb-2">⚠️ Arre Ruk Jao janab!</h2>
        <p className="text-black">Naam aur DP dono bharna zaroori hai! 😅</p>
        <button
          onClick={() => setShowPopup(false)}
          className="mt-4 px-4  relative  py-3 rounded-md font-[ClashDispla] text-white font-semibold overflow-hidden shadow-xl bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] hover:from-[#485563] hover:to-[#29323c] transform hover:-translate-y-1 hover:scale-105 transition duration-300"
        >
          Theek hai, Samajh gya
        </button>
      </div>
    </div>
  )}
</div>

  );
}
