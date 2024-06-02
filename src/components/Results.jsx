import React from 'react';
import Card from './Card';

export default function Results({ results }) {
  return (
    <div className='grid max-w-6xl grid-cols-1 min-[420px]:grid-cols-2 gap-5 p-3 mx-auto mt-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {results.length > 0 ? (
        results.map((result, index) => <Card result={result} index={index} />)
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}
