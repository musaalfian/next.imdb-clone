import React from 'react';
import { FaStar } from 'react-icons/fa';
import { TbCategoryPlus } from 'react-icons/tb';
import { LuCalendarDays } from 'react-icons/lu';

const API_KEY = process.env.API_KEY;

export default async function MovieDetail({ params }) {
  const movieId = params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const movie = await res.json();

  const genre = movie.genres.map((genre, index) => (
    <p key={index} className='text-gray-900 dark:text-white'>
      {genre.name}
    </p>
  ));

  const RoundNumber = ({ value }) => {
    const roundedValue = parseFloat(value).toFixed(1);
    return <span className='text-gray-900 dark:text-white'>{roundedValue}</span>;
  };

  const FormattedDate = ({ value }) => {
    const [year, month, day] = value.split('-');
    const formattedDate = `${day}-${month}-${year}`;
    return <p>{formattedDate}</p>;
  };

  return (
    <>
      <div className='grid grid-cols-1 p-3 gap-3 md:grid-cols-[1fr_3fr] max-w-4xl mx-auto mt-12 pb-5 border-b border-gray-700 dark:border-slate-300'>
        <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} width={200} height={300} />
        <div className=''>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>{movie.original_title}</h1>
          <div className='mt-4'>
            <h2 className='mb-1 text-base font-bold text-gray-600 dark:text-slate-400'>Overview</h2>
            <p className='text-gray-900 dark:text-white'>{movie.overview}</p>
            <div className='grid grid-cols-1 min-[400px]:grid-cols-2 mt-4 sm:grid-cols-3'>
              <div className=''>
                <h2 className='mt-3 mb-1 text-base font-bold text-gray-600 dark:text-slate-400'>Rating</h2>
                <div className='flex items-center gap-2'>
                  <FaStar className='text-amber-400' />
                  <RoundNumber value={movie.vote_average} />
                </div>
              </div>
              <div className=''>
                <h2 className='mt-3 mb-1 text-base font-bold text-gray-600 dark:text-slate-400'>Genre</h2>
                <div className='flex items-center gap-2'>
                  <TbCategoryPlus />
                  <div className='flex items-center gap-3'>{genre}</div>
                </div>
              </div>
              <div className=''>
                <h2 className='mt-3 mb-1 text-base font-bold text-gray-600 dark:text-slate-400'>Release Date</h2>
                <div className='flex items-center gap-3'>
                  <LuCalendarDays />
                  <FormattedDate value={movie.release_date} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
