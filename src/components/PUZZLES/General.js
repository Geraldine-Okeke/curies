import React, { useState, useEffect } from "react";

const secretGeneralWords = [
  "PHYSICS",
  "CHEMISTRY",
  "BIOLOGY",
  "ASTRONOMY",
  "ELECTRIC",
  "MAGNETISM",
  "ATOMS",
  "FRICTION",
  "VELOCITY",
  "THERMAL",
  "MOMENTUM",
];

const grid = [
  ["P", "H", "Y", "S", "I", "C", "S", "I", "C", "S"],
  ["C", "H", "E", "M", "I", "S", "T", "R", "Y", "Y"],
  ["B", "I", "O", "L", "O", "G", "Y", "A", "S", "M"],
  ["A", "S", "T", "R", "O", "N", "O", "M", "Y", "U"],
  ["E", "L", "E", "C", "T", "R", "I", "C", "I", "T"],
  ["M", "A", "G", "N", "E", "T", "I", "S", "M", "N"],
  ["A", "T", "O", "M", "S", "M", "O", "M", "E", "E"],
  ["F", "R", "I", "C", "T", "I", "O", "N", "R", "M"],
  ["V", "E", "L", "O", "C", "I", "T", "Y", "A", "0"],
  ["T", "H", "E", "R", "M", "A", "L", "C", "O", "M"],
];
const General = () => {
  const [userGuess, setUserGuess] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [remainingChances, setRemainingChances] = useState(15);
  const [message, setMessage] = useState("");
  const [congratulatory, setCongratulatory] = useState(false);

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const savedData = localStorage.getItem("GeneralGame");
    if (savedData) {
      const { correctGuesses, remainingChances } = JSON.parse(savedData);
      setCorrectGuesses(correctGuesses);
      setRemainingChances(remainingChances);
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever the state changes
    const dataToSave = JSON.stringify({ correctGuesses, remainingChances });
    localStorage.setItem("GeneralGame", dataToSave);
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
  
    if (secretGeneralWords.includes(guess) && !correctGuesses.includes(guess)) {
      setCorrectGuesses([...correctGuesses, guess]);
  
      if (correctGuesses.length === secretGeneralWords.length - 1) {
        setMessage("Congratulations! You've found all the words!");
        setCongratulatory(true);
      } else {
        setMessage("");
      }
    } else {
      setRemainingChances(remainingChances - 1);
      setMessage(`Try again. You have ${remainingChances - 1} chances left.`);
    }
  
    setUserGuess("");
  };
  
  const calculateScore = () => {
    const score = (correctGuesses.length / secretGeneralWords.length) * 100;
    return score.toFixed(2);
  };

  const refreshGame = () => {
    localStorage.removeItem("GeneralGame");

    setCorrectGuesses([]);
    setRemainingChances(15);
    setMessage("");
    setCongratulatory(false);
    setUserGuess("");
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 overflow-visible">General </h2>
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
        {message && <p className="text-red-500">{message}</p>}
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

export default General;
