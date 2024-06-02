'use client';
import React, { useEffect } from 'react';

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className='mx-auto mt-10 text-center w-fit'>
      <h1>Something went wrong. Please try again.</h1>
      <button onClick={() => reset()} className='px-2 py-1 mt-2 rounded-md bg-amber-600'>
        Try Again
      </button>
    </div>
  );
}
