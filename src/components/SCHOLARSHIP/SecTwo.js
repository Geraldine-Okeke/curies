import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SecTwo() {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    
    const apiUrl = 'https://raw.githubusercontent.com/Chikabel/scholarships-json/main/scholarships.json';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setScholarships(data); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); 

  const displayedScholarships = scholarships.slice(0, 5); 

  return (
    <div className='bg-green-200 px-4 py-10'>
      <h1 className="text-4xl font-bold mb-4">Scholarship List</h1>
      <ul className="list-none space-y-6">
        {displayedScholarships.map((scholarship, index) => (
          <li key={index}>
            <div>
              <p className="font-bold"> <span className='font-bold'>APPLY:</span> {scholarship.title}</p>
              <a href={scholarship.link} target="_blank" rel="noopener noreferrer">
                {scholarship.link}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <Link to='/SCHOLARSHIP/AllScholarships'>
        <button className='bg-blue-800 text-white px-4 mt-10 mx-auto font-bold py-3 border rounded-full'>
          View More
        </button>
      </Link>
    </div>
  );
}

export default SecTwo;
