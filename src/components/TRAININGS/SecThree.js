import React from 'react';
import Events from './Events';

export default function SecThree() {
  return (
    <>
      <div>
        <h2 className="font-bold text-4xl text-center my-10 overflow-visible">Upcoming Events</h2>
        <div className="flex flex-col py-5 px-4">
          {Events.map((event, index) => (
            <div className='flex border px-2 flex-col md:flex-row relative gap-4 md:gap-20 overflow-visible py-10' key={index}>
              <div className='relative overflow-visible h-auto md:w-1/4'>
                <span className='font-bold text-3xl'>{event.day}</span>
                <span className='absolute font-semibold -top-2'>{event.month}</span>
                <span className='absolute font-semibold -bottom-2 text-sm'>{event.year}</span>
              </div>
              <div className='md:w-3/4'>
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <button className='bg-red-700 font-bold py-2 text-white rounded-full  md:absolute md:right-10 px-4'>Register</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
