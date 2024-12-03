import React from 'react';

const Grid = () => {
  return (
    <main className='grid grid-cols-1 sm:grid-cols-8 grid-rows-8 sm:grid-rows-5 h-screen gap-1 p-4'>
      
      <div className='bg-yellow-600 text-white flex justify-center items-center col-span-full'>
        Header
      </div>

      
      <div className='bg-lime-600 text-white flex justify-center items-center row-span-3 hidden sm:block'>
        Left Sidebar
      </div>

      
      <div className='bg-gray-800 text-white flex justify-center items-center sm:col-span-2 sm:col-start-2'>
        Content 1
      </div>
      <div className='bg-gray-800 text-white flex justify-center items-center sm:col-span-2 sm:col-start-auto'>
        Content 2
      </div>
      <div className='bg-gray-800 text-white flex justify-center items-center sm:col-span-2 sm:col-start-auto'>
        Content 3
      </div>
      <div className='bg-gray-800 text-white flex justify-center items-center sm:col-span-3 sm:col-start-2'>
        Content 4
      </div>
      <div className='bg-gray-800 text-white flex justify-center items-center sm:col-span-3 sm:col-start-auto'>
        Content 5
      </div>
      <div className='bg-gray-800 text-white flex justify-center items-center sm:col-span-6 sm:col-start-2'>
        Content 6
      </div>

      
      <div className='bg-lime-600 text-white flex justify-center items-center row-span-3 row-start-2 col-start-8 hidden sm:block'>
        Right Sidebar
      </div>

     
      <div className='bg-yellow-600 text-white flex justify-center items-center col-span-full'>
        Footer
      </div>
    </main>
  );
};

export default Grid;



