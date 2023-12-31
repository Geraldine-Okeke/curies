import React, { useState, useEffect } from 'react';
import Header from '../HOME/Header';
import Footer from '../HOME/Footer';
function AllScholarships() {
  const [scholarships, setScholarships] = useState([]);

  const [loading, setLoading] = useState(true);

useEffect(() => {
  const apiUrl =
    'https://raw.githubusercontent.com/Chikabel/scholarships-json/main/scholarships.json';

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      setScholarships(data);
      setLoading(false); // Set loading to false once data is loaded
    })
    .catch((error) => {
      console.error('Error:', error);
      setLoading(false); // Set loading to false in case of an error
    });
}, []);


return (
  <>
    <Header />
    <div className='bg-green-200 px-4 py-20'>
      <h1 className='text-4xl font-bold mb-4'>All Scholarships</h1>
      {loading ? (
        // Render a loading spinner with the loading-animation class
        <div className='loading-spinner'></div>
      ) : (
        <ul className='list-none space-y-6'>
          {scholarships.map((scholarship, index) => (
            <li key={index}>
              <div>
                <p className='font-bold'>
                  <span className='font-bold'>APPLY:</span> {scholarship.title}
                </p>
                <a href={scholarship.link} target='_blank' rel='noopener noreferrer'>
                  {scholarship.link}
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    <Footer />
  </>
);

}

export default AllScholarships;
