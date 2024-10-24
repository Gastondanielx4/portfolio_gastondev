"use client";

import { itemsNavbar } from '@/data';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ToggleTheme } from './toggle-theme';
import * as Tooltip from '@radix-ui/react-tooltip';


export default function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId: number;

    const handleScroll = () => {
      setVisible(false);

      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setVisible(true);
      }, 800);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <nav
      className={`fixed z-20 flex flex-col items-center w-full mt-auto justify-center h-max bottom-6 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className={`flex items-center gap-2 justify-center px-4 py-1 dark:bg-black bg-slate-800/80 background-blur-sm rounded-full border-2 border-primary ${visible ? 'border-opacity-100' : 'border-opacity-0'}`}>
         {itemsNavbar.map((item) => (
          <Tooltip.Provider key={item.id}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div className='cursor-pointer hover:dark:bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded'>
                  <Link href={item.link}>{item.icon}</Link>
                </div>
              </Tooltip.Trigger>
              <Tooltip.Content className='bg-slate-600 text-white p-2 rounded'>
                {item.description}
                <Tooltip.Arrow className='fill-slate-600' />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        ))}
        <ToggleTheme />
      </div>
    </nav>
  );
}
