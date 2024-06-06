'use client';

import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Panggil fungsi pencarian saat nilai input berubah
  };

  return (
    <>
      <div className='flex max-w-6xl gap-3 px-3 mx-auto my-8'>
        <div className='relative'>
          <input
            type='text'
            value={searchTerm}
            className='p-2 border border-gray-400 ps-10 focus:outline-none focus:border-blue-500 focus:shadow-sm dark:border-slate-300'
            placeholder='Search anything...'
            onChange={handleInputChange}
          />
          <IoSearchSharp className='absolute -translate-y-1/2 left-3 top-1/2' />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
