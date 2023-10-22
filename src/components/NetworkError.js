import React from 'react';

const NetworkError = () => {
  return (
    <div className="bg-red-500 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-semibold mb-4">Network Error</h1>
      <p className="text-lg">Please check your internet connection and try again.</p>
    </div>
  );
};

export default NetworkError;
