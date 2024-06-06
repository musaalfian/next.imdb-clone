'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function NavbarItem({ title, param }) {
  const searchParam = useSearchParams();
  const genre = searchParam.get('genre');

  return (
    <Suspense>
      <Link
        href={`/?genre=${param}`}
        className={`${genre === param ? 'underline underline-offset-8 decoration-2 decoration-amber-400' : ''}`}
      >
        {title}
      </Link>
    </Suspense>
  );
}
