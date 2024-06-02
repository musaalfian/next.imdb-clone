import React from 'react';

export default function Results({ results }) {
  return (
    <div className='grid max-w-6xl grid-cols-5 gap-3 p-3 mx-auto mt-8'>
      {results.length > 0 ? (
        results.map((result, index) => (
          <div key={index} className='p-3 border rounded-lg border-slate-300'>
            <img
              src={`http://image.tmdb.org/t/p/original/${result.poster_path}`}
              className='w-full h-full max-h-[260px] object-contain rounded-lg overflow-hidden'
            />
            <h3>{result.title || result.name}</h3>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}
