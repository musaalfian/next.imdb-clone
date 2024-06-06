import React from 'react';

const Footer = () => {
  return (
    <footer className='max-w-6xl p-3 mx-auto mt-16 border-t border-gray-400'>
      <div className='flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600 sm:justify-between dark:text-gray-300'>
        <p className='text-center sm:text-left'>
          Build with <span className='font-bold text-gray-800 dark:text-gray-100'>NextJS</span>,
          <span className='font-bold text-gray-800 dark:text-gray-100 ms-1.5'>TailwindCSS</span>, and
          <span className='font-bold text-gray-800 dark:text-gray-100 ms-1.5'>Vercel Hosting</span>.
        </p>
        <p>
          Created by
          <a
            href='https://www.linkedin.com/in/musaalfian/'
            target='__blank'
            className='font-bold text-gray-800 dark:text-gray-100 ms-1.5'
          >
            Musa
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
