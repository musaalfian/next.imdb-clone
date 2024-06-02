import React from 'react';
import MenuItem from './MenuItem';
import { FaHome } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <>
      <div className='flex items-center justify-between max-w-6xl p-3 mx-auto'>
        <div className='flex gap-4'>
          <MenuItem title='home' address='/' Icon={FaHome} />
          <MenuItem title='about' address='/about' Icon={FaInfoCircle} />
        </div>
        <div className='flex items-center gap-4'>
          <DarkModeSwitch />
          <Link href='/' className='flex items-center'>
            <span className='px-2 py-1 rounded-lg bg-amber-400'>IMDB</span>
            <span className='hidden sm:inline-block'>Clone</span>
          </Link>
        </div>
      </div>
    </>
  );
}
