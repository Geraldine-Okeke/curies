import React, { useState,useEffect } from "react";

const secretChemistryWords
 = [
  "MOLECULES",
  "COMPOUND",
  "STRUCTURE",
  "CHEMICAL",
  "ATOMIC",
  "EQUATION",
  "SOLVENT",
  "GAS",
  "POLYMER",
  "BONDING",
  "ELEMENTS",
];

const grid = [
  ["E", "L", "E", "M", "E", "N", "T", "S", "P", "S"],
  ["C", "H", "E", "M", "I", "C", "A", "L", "Y", "O"],
  ["C", "O", "M", "P", "O", "U", "N", "D", "I", "L"],
  ["S", "T", "R", "U", "C", "T", "U", "R", "E", "V"],
  ["A", "T", "O", "M", "I", "C", "N", "U", "M", "E"],
  ["M", "O", "L", "E", "C", "U", "L", "E", "S", "N"],
  ["B", "O", "N", "D", "I", "N", "G", "E", "N", "T"],
  ["C", "O", "M", "P", "O", "U", "N", "D", "I", "G"],
  ["E", "Q", "U", "A", "T", "I", "O", "N", "R", "A"],
  ["P", "O", "L", "Y", "M", "E", "R", "R", "M", "S"],
];

const Chemistry = () => {
  const [userGuess, setUserGuess] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [remainingChances, setRemainingChances] = useState(15);
  const [message, setMessage] = useState("");
  const [congratulatory, setCongratulatory] = useState(false);

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const savedData = localStorage.getItem("ChemistyGame");
    if (savedData) {
      const { correctGuesses, remainingChances } = JSON.parse(savedData);
      setCorrectGuesses(correctGuesses);
      setRemainingChances(remainingChances);
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever the state changes
    const dataToSave = JSON.stringify({ correctGuesses, remainingChances });
    localStorage.setItem("ChemistyGame", dataToSave);
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
  
    if (secretChemistryWords.includes(guess) && !correctGuesses.includes(guess)) {
      setCorrectGuesses([...correctGuesses, guess]);
  
      if (correctGuesses.length === secretChemistryWords.length - 1) {
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
    const score = (correctGuesses.length / secretChemistryWords.length) * 100;
    return score.toFixed(2);
  };

  const refreshGame = () => {
    localStorage.removeItem("ChemistyGame");

    setCorrectGuesses([]);
    setRemainingChances(15);
    setMessage("");
    setCongratulatory(false);
    setUserGuess("");
  };


  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 overflow-visible">Chemistry</h2>
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
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Guess
        </button>
        <button
          onClick={refreshGame}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 ml-2"
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

export default Chemistry;
