import React, { useEffect, useState } from 'react';

function SecThree() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/Chikabel/scholarships-json/main/riddles.json'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setQuestions(data);
        setLoading(false); // Set loading to false once data is loaded
      } catch (error) {
        console.error('Error fetching JSON data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };
  
    fetchData();
  }, []);
  

  const resetQuiz = () => {
    // Reset the quiz by clearing answers but keep the score
    localStorage.removeItem('quizAnswers');

    setAnswers(new Array(questions.length).fill(-1));
    setSubmitted(false);
  };

  const handleOptionClick = (questionIndex, optionIndex) => {
    if (!submitted) {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = optionIndex;
      setAnswers(newAnswers);

      // Store answers in local storage
      localStorage.setItem('quizAnswers', JSON.stringify(newAnswers));
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
    setSubmitted(true);

    // Store the score in local storage
    localStorage.setItem('quizScore', percentageScore.toString());
  };

  return (
    <div className="bg-yellow-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 overflow-visible">PUZZLES</h1>
        {loading ? (
        // Render a loading spinner with the loading-animation class
        <div className="loading-spinner"></div>
          ) : !submitted ? (
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
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded ml-4"
              onClick={resetQuiz}
            >
              Refresh
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
