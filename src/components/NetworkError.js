import React from 'react';

const NetworkError = () => {
  return (
    <div className="bg-red-500 min-h-screen flex flex-col items-center justify-center text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-red-800 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <h1 className="text-4xl font-extrabold mb-2">Network Error</h1>
      <p className="text-lg px-2">
        It seems there's an issue with your network. Please check your internet connection and try again.
      </p>
    </div>
  );
};

export default NetworkError;
