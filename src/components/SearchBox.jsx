import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';

const SearchBox = () => {
  return (
    <>
      <div className='flex gap-3 max-w-6xl mx-auto my-8 px-3'>
        <div className='relative'>
          <input
            type='text'
            className='p-2 ps-10 border border-gray-400 focus:outline-none focus:border-blue-500 focus:shadow-sm dark:border-slate-300 rounded-md'
            placeholder='Search anything...'
          />
          <IoSearchSharp className='absolute left-3 top-1/2 -translate-y-1/2' />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
