import Results from '@/components/Results';
import React from 'react';

const API_KEY = process.env.API_KEY;

export default async function Page({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const endpoint = genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week';
  const url = `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  const results = data.results || [];

  return <Results results={results} />;
}
