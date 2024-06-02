import React from 'react';

const API_KEY = process.env.API_KEY;

export default async function MovieDetail({ params }) {
  const movieId = params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const movie = await res.json();
  console.log(movie);

  return (
    <>
      <div className='grid grid-cols-[1fr_3fr] max-w-4xl mx-auto mt-12'>
        <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} width={200} height={300} />
        <div className=''>
          <h1>{movie.original_title}</h1>
          <p>{movie.overview}</p>
        </div>
      </div>
    </>
  );
}
