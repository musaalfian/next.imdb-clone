'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
  const searchParam = useSearchParams();
  const genre = searchParam.get('genre');

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`${genre === param ? 'underline underline-offset-8 decoration-2 decoration-amber-400' : ''}`}
      >
        {title}
      </Link>
    </div>
  );
}
