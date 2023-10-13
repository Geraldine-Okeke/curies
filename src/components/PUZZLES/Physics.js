import React, { useState, useEffect } from "react";

const secretPhysicsWords = [
  "FORCES",
  "ENERGY",
  "MOTION",
  "WAVE",
  "ELECTRONS",
  "MASS",
  "PRESSURE",
  "LIGHT",
  "RELATIVITY",
  "ACCELERATE",
  "GRAVITY",
  "FREEBODY"
];

const grid = [
  ["F", "O", "R", "C", "E", "S", "M", "O", "T", "I"],
  ["G", "R", "A", "V", "I", "T", "A", "T", "I", "O"],
  ["M", "O", "T", "I", "O", "N", "E", "N", "E", "R"],
  ["A", "C", "C", "E", "L", "E", "R", "A", "T", "E"],
  ["E", "N", "E", "R", "G", "Y", "M", "A", "S", "S"],
  ["W", "A", "V", "E", "L", "I", "G", "H", "T", "S"],
  ["E", "L", "E", "C", "T", "R", "O", "N", "S", "P"],
  ["F", "R", "E", "E", "B", "O", "D", "Y", "D", "I"],
  ["P", "R", "E", "S", "S", "U", "R", "E", "V", "E"],
  ["R", "E", "L", "A", "T", "I", "V", "I", "T", "Y"],
];

const Physics = () => {
  const [userGuess, setUserGuess] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [remainingChances, setRemainingChances] = useState(15);
  const [message, setMessage] = useState("");
  const [congratulatory, setCongratulatory] = useState(false);

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const savedData = localStorage.getItem("physicsGame");
    if (savedData) {
      const { correctGuesses, remainingChances } = JSON.parse(savedData);
      setCorrectGuesses(correctGuesses);
      setRemainingChances(remainingChances);
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever the state changes
    const dataToSave = JSON.stringify({ correctGuesses, remainingChances });
    localStorage.setItem("physicsGame", dataToSave);
  }, [correctGuesses, remainingChances]);

  const handleGuess = () => {
    const guess = userGuess.toUpperCase();
  
    if (!guess) {
      setMessage("Please enter a word before guessing.");
      return;
    }
  
    if (remainingChances <= 0) {
      setMessage("You have used all your chances.");
      return;
    }
  
    if (secretPhysicsWords.includes(guess) && !correctGuesses.includes(guess)) {
      setCorrectGuesses([...correctGuesses, guess]);
  
      if (correctGuesses.length === secretPhysicsWords.length - 1) {
        setMessage("Congratulations! You've found all the words!");
        setCongratulatory(true);
      } else {
        setMessage("");
      }
    } else {
      setRemainingChances(remainingChances - 1);
      setMessage("Try again. You have " + remainingChances + " chances left.");
    }
  
    setUserGuess("");
  };
  
  const calculateScore = () => {
    const score = (correctGuesses.length / secretPhysicsWords.length) * 100;
    return score.toFixed(2);
  };

  const refreshGame = () => {
    localStorage.removeItem("physicsGame");

    setCorrectGuesses([]);
    setRemainingChances(15);
    setMessage("");
    setCongratulatory(false);
    setUserGuess("");
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 overflow-visible">Physics </h2>
      <div className="grid grid-cols-10 gap-2 mb-4">
        {grid.map((row, rowIndex) => (
          row.map((letter, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="sm:w-8 sm:h-8 h-4 w-4  border-gray-300 text-xs sm:text-lg bg-blue-300 text-center"
            >
              {letter}
            </div>
          ))
        ))}
      </div>
      <div className="flex sm:flex-row gap-3 flex-col">
        <input
          type="text"
          placeholder="Enter your guess"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          className="mr-2 px-2 py-1 border border-gray-300 rounded"
        />
        <button
          onClick={handleGuess}
          className="px-4 py-2 bg-blue-500 text-white rounded hover-bg-blue-700"
        >
          Guess
        </button>
        <button
          onClick={refreshGame}
          className="px-4 py-2 bg-red-500 text-white rounded hover-bg-red-700 ml-2"
        >
          Refresh
        </button>
      </div>
      <div className="text-xl mt-4">
        <strong>Correct Guesses:</strong> {correctGuesses.join(", ")}
      </div>
      <div className="text-xl mt-2">
        {message && <p>{message}</p>}
        {remainingChances > 0 && (
          <p>
            <strong>Remaining Chances:</strong> {remainingChances}
          </p>
        )}
        <strong>Score:</strong> {calculateScore()}%
      </div>
      {congratulatory && (
        <h1 className="text-4xl mt-4 text-green-500 animate-bounce overflow-visible">
          Congratulations! 🎉
        </h1>
      )}
    </div>
  );
};

export default Physics;
