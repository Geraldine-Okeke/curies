import React from 'react';
import cur1 from './Images/cur1.png';
import cur2 from './Images/cur2.png';
import cur3 from './Images/cur3.png';
import cur4 from './Images/cur4.png';
import cur5 from './Images/cur5.png';
import cur6 from './Images/cur6.png';

export default function SecFour() {
  return (
    <>
      <h1 className='text-4xl font-bold text-blue-800 text-center my-8'>THE CURIES</h1>
      <div className='flex flex-wrap px-4'>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
          <img src={cur1} alt='cur' className='w-full h-full object-cover' />
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
          <img src={cur2} alt='cur' className='w-full h-full object-cover' />
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
          <img src={cur3} alt='cur' className='w-full h-full object-cover' />
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
          <img src={cur4} alt='cur' className='w-full h-full object-cover' />
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
          <img src={cur5} alt='cur' className='w-full h-full object-cover' />
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
          <img src={cur6} alt='cur' className='w-full h-full object-cover' />
        </div>
      </div>
    </>
  );
}
