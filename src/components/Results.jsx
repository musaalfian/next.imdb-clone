'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Card from './Card';
import SearchBox from '@/components/SearchBox';

export default function Results() {
  const [movies, setMovies] = useState([]);
  const [initialResults, setInitialResults] = useState([]);
  const searchParams = useSearchParams();
  const API_KEY = '7908871921eeba65fb0062d9439b645b';

  useEffect(() => {
    const fetchMovies = async () => {
      const genre = searchParams.get('genre') || 'fetchTrending';
      const endpoint = genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week';
      const url = `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`;
      const res = await fetch(url);
      if (!res.ok) {
        console.error('Network response was not ok');
        return;
      }
      const data = await res.json();
      setMovies(data.results || []);
      setInitialResults(data.results || []);
    };

    fetchMovies();
  }, [searchParams, API_KEY]);

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setMovies(initialResults);
    } else {
      const filteredMovies = initialResults.filter((movie) =>
        ['title', 'original_title', 'original_name', 'name'].some((key) =>
          movie[key]?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setMovies(filteredMovies);
    }
  };

  return (
    <>
      <SearchBox onSearch={handleSearch} />
      <div className='grid max-w-6xl grid-cols-1 min-[420px]:grid-cols-2 gap-5 p-3 mx-auto mt-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {movies.length > 0 ? (
          movies.map((result, index) => <Card key={result.id || index} result={result} index={index} />)
        ) : (
          <p>No results found</p>
        )}
      </div>
    </>
  );
}
