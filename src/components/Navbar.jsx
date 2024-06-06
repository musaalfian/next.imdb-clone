import React, { Suspense } from 'react';
import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <>
      <div className='flex items-center justify-center gap-6 p-3 bg-amber-100 dark:bg-slate-700'>
        <Suspense>
          <NavbarItem title='Trending' param='fetchTrending' />
          <NavbarItem title='Top Rated' param='fetchTopRated' />
        </Suspense>
      </div>
    </>
  );
}
