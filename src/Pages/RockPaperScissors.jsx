import React, { useState, useEffect } from 'react';
import Navbar from '../Pages/Navbar.jsx';

const choices = [
  { name: 'rock', image: '/public/img/rock.jpg' },
  { name: 'paper', image: '/public/img/paper.jpg'  },
  { name: 'scissors', image: '/public/img/scissor.jpg' },
];

const RockPaperScissors = () => {
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [gameOver, setGameOver] = useState(false);
  const winScore = 5;

  const play = (playerChoice) => {
    if (gameOver) return;

    const compChoice = choices[Math.floor(Math.random() * 3)].name;
    setPlayer(playerChoice);
    setComputer(compChoice);

    if (playerChoice === compChoice) {
      setResult("It's a draw!");
    } else if (
      (playerChoice === 'rock' && compChoice === 'scissors') ||
      (playerChoice === 'paper' && compChoice === 'rock') ||
      (playerChoice === 'scissors' && compChoice === 'paper')
    ) {
      setResult('You win!');
      setScore(prev => {
        const updated = { ...prev, player: prev.player + 1 };
        if (updated.player === winScore) {
          setGameOver(true);
          setResult('🎉 You are the Champion!');
        }
        return updated;
      });
    } else {
      setResult('You lose!');
      setScore(prev => {
        const updated = { ...prev, computer: prev.computer + 1 };
        if (updated.computer === winScore) {
          setGameOver(true);
          setResult('💀 Computer Wins the Game!');
        }
        return updated;
      });
    }
  };

  const reset = () => {
    setPlayer(null);
    setComputer(null);
    setResult('');
  };

  const restartGame = () => {
    setPlayer(null);
    setComputer(null);
    setResult('');
    setScore({ player: 0, computer: 0 });
    setGameOver(false);
  };

  const getImage = (name) => choices.find(c => c.name === name)?.image;

  return (
    <>
  <div>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-black text-white flex flex-col items-center justify-center p-6">
      
      <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        🥊 Rock Paper Scissors
      </h1>

      {!gameOver && (
        <div className="flex space-x-6 mb-6">
          {choices.map(c => (
            <button
              key={c.name}
              onClick={() => play(c.name)}
              className="w-24 h-24 bg-white rounded-full overflow-hidden shadow-lg hover:scale-110 transition transform"
              title={c.name}
            >
              <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {player && computer && (
        <div className="text-center mb-6 flex flex-col items-center">
          <div className="flex items-center mb-2">
            <span className="text-xl mr-2">👤 You:</span>
            <img src={getImage(player)} alt={player} className="w-20 h-20 mr-4" />
            <span className="text-xl">🤖 Computer:</span>
            <img src={getImage(computer)} alt={computer} className="w-20 h-20 ml-4" />
          </div>
          <h2 className="text-2xl font-bold mt-2 text-green-400">{result}</h2>
        </div>
      )}

      <div className="flex items-center space-x-8 mb-6 text-lg font-semibold">
        <div className="text-purple-300">👤 You: {score.player}</div>
        <div className="text-pink-300">🤖 Computer: {score.computer}</div>
      </div>

      {!gameOver && result && result !== "It's a draw!" && (
        <button
          onClick={reset}
          className="relative px-6 py-3 rounded-md font-[ClashDisplay] text-white font-semibold overflow-hidden shadow-xl bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] hover:from-[#485563] hover:to-[#29323c] transform hover:-translate-y-1 hover:scale-105 transition duration-300"
        >
          🔄 Next Round
        </button>
      )}

      {gameOver && (
        <button
          onClick={restartGame}
          className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded shadow-xl"
        >
          🔁 Restart Game
        </button>
      )}
    </div>
    </div>
    </>
  );
};

export default RockPaperScissors;
