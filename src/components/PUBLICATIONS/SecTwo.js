import React, { useEffect, useState } from 'react';

const SecTwo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/Geraldine-Okeke/scholarships-json/main/Publications.json'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const jsonData = await response.json();
        setData(jsonData.JOURNALS); // Access the JOURNALS property
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-red-500 text-white font-semibold'>
      <h1 className='text-center font-bold text-lg'>List Of Publications</h1>
      <ul className='px-4' >
        {data.map((item, index) => (
          <li className='my-5' key={index}>{`${index + 1}. ${item.title} ${item.doi || ''}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SecTwo;
