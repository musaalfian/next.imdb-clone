'use client';

import { useTheme } from 'next-themes';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      {currentTheme === 'dark' ? (
        <MdLightMode onClick={() => setTheme('light')} className='cursor-pointer hover:text-amber-400' />
      ) : (
        <MdDarkMode onClick={() => setTheme('dark')} className='cursor-pointer hover:text-amber-400' />
      )}
    </>
  );
}
