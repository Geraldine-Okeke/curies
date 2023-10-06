import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SecTwo() {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    // Replace this with the raw JSON URL from your GitHub repository
    const apiUrl = 'https://raw.githubusercontent.com/Geraldine-Okeke/scholarships-json/main/scholarships.json';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setScholarships(data); // Update the state with scholarship data
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className='bg-green-200 px-4 py-10'>
      <h1 className="text-4xl font-bold mb-4">Scholarship List</h1>
      <ul className="list-none space-y-6">
        {scholarships.map((scholarship, index) => (
          <li key={index}>
            <div>
              <p className="font-bold"> <span className='font-bold'>APPLY:</span> {scholarship.title}</p>
              <Link to={scholarship.link}>
                {scholarship.link}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SecTwo;
