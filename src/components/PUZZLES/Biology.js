import React, { useState, useEffect } from "react";

const secretBiologyWords = [
  "CELL",
  "DNA",
  "GENE",
  "SPECIE",
  "MITOSIS",
  "RESPIRE",
  "GENETICS",
  "ECOLOGY",
  "BIOTECH",
  "MUTATION",
  "REACTION",
  "CELLULOSE",
];

const grid = [
  ["D", "N", "A", "R", "E", "S", "P", "I", "R", "E"],
  ["C", "O", "M", "I", "T", "O", "S", "I", "S", "I"],
  ["E", "C", "O", "L", "O", "G", "Y", "S", "U", "C"],
  ["L", "E", "T", "O", "R", "A", "T", "T", "I", "E"],
  ["L", "R", "E", "A", "C", "T", "I", "O", "N", "P"],
  ["U", "B", "I", "O", "T", "E", "C", "H", "E", "S"],
  ["L", "N", "S", "L", "I", "E", "N", "C", "E", "I"],
  ["O", "E", "E", "O", "L", "O", "G", "Y", "O", "A"],
  ["S", "C", "M", "U", "T", "A", "T", "I", "O", "N"],
  ["E", "G", "E", "N", "E", "T", "I", "C", "S", "I"],
];

const Biology = () => {
  const [userGuess, setUserGuess] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [remainingChances, setRemainingChances] = useState(15);
  const [message, setMessage] = useState("");
  const [congratulatory, setCongratulatory] = useState(false);

  // Define unique local storage keys for this component
  const localStorageKeyCorrectGuesses = "biologyCorrectGuesses";
  const localStorageKeyRemainingChances = "biologyRemainingChances";

  // Load the state from local storage when the component mounts
  // Load the state from local storage when the component mounts
// Load the state from local storage when the component mounts
useEffect(() => {
  const savedCorrectGuesses = JSON.parse(localStorage.getItem(localStorageKeyCorrectGuesses)) || [];
  const savedRemainingChances = parseInt(localStorage.getItem(localStorageKeyRemainingChances)) || 15;

  console.log("Loaded from local storage - correctGuesses:", savedCorrectGuesses);
  console.log("Loaded from local storage - remainingChances:", savedRemainingChances);

  setCorrectGuesses(savedCorrectGuesses);
  setRemainingChances(savedRemainingChances);
}, []);


  
  // Save the state to local storage whenever it changes
  useEffect(() => {
    // Save the state to local storage whenever it changes
    localStorage.setItem("biologyCorrectGuesses", JSON.stringify(correctGuesses));
    localStorage.setItem("biologyRemainingChances", remainingChances);
  
    console.log("Saved to local storage:", {
      correctGuesses,
      remainingChances
    });
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

    if (secretBiologyWords.includes(guess) && !correctGuesses.includes(guess)) {
      setCorrectGuesses([...correctGuesses, guess]);

      if (correctGuesses.length === secretBiologyWords.length - 1) {
        setMessage("Congratulations! You've found all the words!");
        setCongratulatory(true);
      } else {
        setMessage("");
      }
    } else {
      setRemainingChances(remainingChances - 1);
      setMessage(`Try again. You have ${remainingChances - 1} chances left.`);
    }

    // Clear the input area after processing the guess
    setUserGuess("");
  };

  const calculateScore = () => {
    const score = (correctGuesses.length / secretBiologyWords.length) * 100;
    return score.toFixed(2);
  };

  const resetGame = () => {
    // Clear local storage for this component
    localStorage.removeItem(localStorageKeyCorrectGuesses);
    localStorage.removeItem(localStorageKeyRemainingChances);

    // Reset component state
    setUserGuess("");
    setCorrectGuesses([]);
    setRemainingChances(15);
    setMessage("");
    setCongratulatory(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 overflow-visible">Biology</h2>
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
          onClick={resetGame}
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

export default Biology;
