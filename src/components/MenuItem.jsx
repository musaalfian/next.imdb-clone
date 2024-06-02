import React from 'react';
import Link from 'next/link';

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className='flex gap-4 hover:text-amber-400'>
        <Icon className='sm:hidden' />
        <p className='hidden uppercase sm:inline-block'>{title}</p>
      </Link>
    </div>
  );
}
