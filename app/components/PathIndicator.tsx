'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const PathIndicator = React.memo(function PathIndicator() {
  const pathname = usePathname() || '';
  const segments = pathname === '/' ? [] : pathname.split('/').filter(Boolean);
  
  const renderPathLinks = (keyPrefix: string) => {
    if (pathname === '/root') {
      return (
        <>
          <Link href="/root" className="text-zinc-500 border-b-0">.</Link>
        </>
      );
    }

    return (
      <>
        <Link href="/root" className="text-zinc-500 border-b-0">.</Link>
        <span className="text-zinc-500"> / </span>
        <Link href="/" className="path-link">home</Link>
        {segments.map((segment, index) => (
          <span key={`${keyPrefix}-${segment}-${index}`}>
            <span className="text-zinc-500"> / </span>
            <Link 
              href={`/${segments.slice(0, index + 1).join('/')}`} 
              className="path-link"
            >
              {segment}
            </Link>
          </span>
        ))}
      </>
    );
  };
  
  return (
    <>
      {/* Mobile version */}
      <div className="md:hidden font-medium text-sm tracking-tight fixed bottom-6 left-0 right-0">
        <div className="absolute inset-x-0 top-0 bottom-[-100vh] bg-zinc-900/70 backdrop-blur-md"></div>
        <div className="relative px-4 py-2">
          <div className="max-w-[65ch] mx-auto">
            {renderPathLinks('mobile')}
          </div>
        </div>
      </div>
      
      {/* Desktop version */}
      <div className="hidden md:block font-medium text-sm tracking-tight">
        {renderPathLinks('desktop')}
      </div>
    </>
  );
}); 