'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const PathIndicator = React.memo(function PathIndicator() {
  const pathname = usePathname() || '';
  const segments = pathname === '/' ? [] : pathname.split('/').filter(Boolean);
  
  const renderPathLinks = (keyPrefix: string) => (
    <>
      <span className="text-zinc-500">. / </span>
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
  
  return (
    <>
      {/* Mobile version */}
      <div className="md:hidden path-indicator-mobile">
        <div className="absolute inset-x-0 top-0 bottom-[-100vh] bg-zinc-900/70 backdrop-blur-md"></div>
        <div className="relative px-4 py-2">
          <div className="max-w-[65ch] mx-auto">
            {renderPathLinks('mobile')}
          </div>
        </div>
      </div>
      
      {/* Desktop version */}
      <div className="hidden md:block path-indicator-desktop">
        {renderPathLinks('desktop')}
      </div>
    </>
  );
}); 