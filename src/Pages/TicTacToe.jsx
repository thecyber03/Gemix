import React, { useState } from 'react';
import Navbar from './Navbar.jsx';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (newBoard) => {
    const combos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6],            // diagonals
    ];
    for (let combo of combos) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    const win = checkWinner(newBoard);

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
    if (win) setWinner(win);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/hero2.jpg')] bg-cover bg-center bg-no-repeat backdrop-blur-sm text-white px-4">

      <h1 className="text-5xl md:text-6xl font-bold mb-4 font-[ClashDisplay] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        ✨ Tic Tac Toe
      </h1>

     {winner && (
  <div className="mt-6 flex flex-col items-center animate-bounce text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 drop-shadow-lg">
      🎉 Congratulations!
    </h2>
    <p className="text-xl mt-2 text-blac font-bold tracking-wider">
      {winner} has won the game!
    </p>
    <div className="mt-4 animate-pulse">
      <span className="text-3xl">🏆🏆🏆</span>
    </div>
  </div>
)}


      <div className="grid grid-cols-3 gap-4 w-[90vw] max-w-[360px]">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-full aspect-square text-4xl md:text-5xl font-extrabold bg-slate-800 hover:bg-slate-700 transition-all duration-300 ease-in-out rounded-xl shadow-xl border border-slate-700 text-center flex items-center justify-center hover:scale-105"
          >
            <span className={`
              ${cell === 'X' ? 'text-purple-400 drop-shadow-[0_0_10px_purple]' : ''}
              ${cell === 'O' ? 'text-pink-400 drop-shadow-[0_0_10px_pink]' : ''}
              transition-all duration-300
            `}>
              {cell}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="mt-8 px-6 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 text-white rounded-full shadow-md transition-transform hover:scale-105 font-semibold"
      >
        🔁 Reset Game
      </button>
    </div>
    </>
  );
};

export default TicTacToe;
