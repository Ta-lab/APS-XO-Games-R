import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

  const [winCountPlayer1, setWinCountPlayer1] = useState(0);
  const [winCountPlayer2, setWinCountPlayer2] = useState(0);

  useEffect(() => {
    if (winner === "X") {
      setWinCountPlayer1(winCountPlayer1 + 1);
    } else if (winner === "O") {
      setWinCountPlayer2(winCountPlayer2 + 1);
    } else {
      setWinCountPlayer2(0);
    }
  }, [winner]);


  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('gameState'));
    if (savedState) {
      setBoard(savedState.board);
      setCurrentPlayer(savedState.currentPlayer);
      setWinner(savedState.winner);
      setDraw(savedState.draw);
    } else {
      startGame();
    }
  }, []);

  const updateLocalStorage = (board, currentPlayer, winner, draw) => {
    localStorage.setItem('gameState', JSON.stringify({ board, currentPlayer, winner, draw }));
  };

  const startGame = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/game/start');
      setBoard(response.data.board);
      setCurrentPlayer(response.data.currentPlayer);
      setWinner(response.data.winner);
      setDraw(response.data.draw);
    } catch (error) {
      console.error('Error starting the game:', error);
    }
  };

  const makeMove = async (index) => {
    if (winner || draw || board[index]) return;
    try {
      const response = await axios.post('http://localhost:5000/api/game/move', { index });
      setBoard(response.data.board);
      setCurrentPlayer(response.data.currentPlayer);
      setWinner(response.data.winner);
      setDraw(response.data.draw);

      // Save state to localStorage
      updateLocalStorage(response.data.board, response.data.currentPlayer, response.data.winner, response.data.draw);
    } catch (error) {
      console.error('Error making a move:', error);
    }
  };

  const resetGame = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/game/reset');
      setBoard(response.data.board);
      setCurrentPlayer(response.data.currentPlayer);
      setWinner(response.data.winner);
      setDraw(response.data.draw);

      // Clear localStorage
      localStorage.removeItem('gameState');
    } catch (error) {
      console.error('Error resetting the game:', error);
    }
  };

  const gameTitle = "AP's XO Game";

  return (
    <div className="game">
      <h1>{gameTitle}</h1>
      <div className="board">
        {board.map((cell, index) => (
          <button key={index} onClick={() => makeMove(index)} className="cell">
            {cell}
          </button>
        ))}
      </div>
      <div className="status">
        {winner ? <h2>{winner === 'Draw' ? 'Draw!' : `Winner: ${winner}`}</h2> : <h2>Current Player: {currentPlayer}</h2>}
      </div>

      <div>
        {winner !== null && (
          winner === "X" ? (
            "Player 1 Wins"
          ) : winner === "O" ? (
            "Player 2 Wins"
          ) : (
            "Draw"
          )
        )}

        <br></br>

        <div>
          <p>Player 1 Win Count: {winCountPlayer1}</p>
          <p>Player 2 Win Count: {winCountPlayer2}</p>
        </div>
      </div>
      
      <div className='status'>
        <button onClick={resetGame}>Start New Game</button> &nbsp;
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}

export default App;
