import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const RoundNumber = ({ value }) => {
  const roundedValue = parseFloat(value).toFixed(1);
  return <span className='text-gray-900 dark:text-gray-400'>{roundedValue}</span>;
};

export default function Card({ result, index }) {
  console.log(result);
  return (
    <Link
      href={`/movie/${result.id}`}
      key={result.id}
      className='border border-gray-400 dark:border-none dark:bg-gray-800'
    >
      <img
        src={`http://image.tmdb.org/t/p/original/${result.poster_path}`}
        className='object-cover max-h-[240px] sm:max-h-[300px] w-full h-full overflow-hidden'
        width={200}
        height={300}
        alt={result.title}
      />
      <div className='p-3'>
        <div className='mt-1 mb-2 text-gray-300 '>
          <div className='flex items-center gap-2'>
            <FaStar className='text-amber-400' />
            <RoundNumber value={result.vote_average} />
          </div>
        </div>
        <h3 className='mb-1 text-base font-bold'>{result.title || result.name}</h3>
        <p className='text-gray-700 dark:text-gray-400 line-clamp-2'>{result.overview}</p>
      </div>
    </Link>
  );
}
