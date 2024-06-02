import React from 'react';

export default function Card({ result, index }) {
  console.log(result);
  return (
    <div key={index} className='p-3 border rounded-lg border-slate-300'>
      <img
        src={`http://image.tmdb.org/t/p/original/${result.poster_path}`}
        className='object-cover max-h-[240px] sm:max-h-[300px] w-full h-full overflow-hidden rounded-lg'
        width={200}
        height={300}
        alt={result.title}
      />
      <h3 className='mt-4 mb-2 text-base font-bold'>{result.title || result.name}</h3>
      <p className='line-clamp-2 text-slate-300'>{result.overview}</p>
      <div className='mt-1 text-gray-300 '>
        <p>{result.release_date}</p>
        <p>Popularity: {result.popularity}</p>
      </div>
    </div>
  );
}
