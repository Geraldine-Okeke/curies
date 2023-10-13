import React, { useEffect, useState } from 'react';

function SecThree() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const resetQuiz = () => {
    // Reset the quiz by clearing answers and score
    setAnswers(new Array(questions.length).fill(-1));
    setScore(null);
    setSubmitted(false);
  };

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Geraldine-Okeke/scholarships-json/main/riddles.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
        // Initialize answers array with -1 (no answer)
        setAnswers(new Array(data.length).fill(-1));
      })
      .catch((error) => {
        console.error('Error fetching JSON data:', error);
      });
  }, []);

  const handleOptionClick = (questionIndex, optionIndex) => {
    if (!submitted) {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = optionIndex;
      setAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    // Calculate the score based on correct answers and total questions
    const totalQuestions = questions.length;
    const correctAnswers = questions.reduce((acc, question, index) => {
      if (question.options[answers[index]] === question.correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);

    const percentageScore = (correctAnswers / totalQuestions) * 100;
    setScore(percentageScore);
    setSubmitted(true); // Mark the quiz as submitted
  };

  return (
    <div className="bg-yellow-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">PUZZLES</h1>
        {!submitted ? (
          <div>
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className="bg-yellow-100 p-6 rounded shadow-lg mb-4">
                <p className="text-lg mb-4">{question.question}</p>
                <ul className="space-y-2">
                  {question.options.map((option, optionIndex) => (
                    <li
                      key={optionIndex}
                      className={`p-2 rounded-md cursor-pointer ${
                        answers[questionIndex] === optionIndex ? 'bg-blue-200' : ''
                      }`}
                    >
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={answers[questionIndex] === optionIndex}
                          onChange={() => handleOptionClick(questionIndex, optionIndex)}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        ) : (
          <div>
            <p className="mt-4">
              Score: {score !== null ? score.toFixed(2) + '%' : 'Calculating...'}
            </p>
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className="bg-white p-6 rounded shadow-lg mt-4">
                <p className="text-lg mb-4">{question.question}</p>
                {answers[questionIndex] === -1 ? (
                  <p>No answer provided</p>
                ) : (
                  <p className={`font-semibold ${
                    question.correctAnswer === question.options[answers[questionIndex]]
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}>
                    {question.correctAnswer === question.options[answers[questionIndex]]
                      ? 'Correct'
                      : `Wrong answer, the correct answer is: ${question.correctAnswer}`}
                  </p>
                )}
              </div>
            ))}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
              onClick={resetQuiz}
            >
              Refresh
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SecThree;
