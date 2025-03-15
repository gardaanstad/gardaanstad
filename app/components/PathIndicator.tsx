'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function PathIndicator() {
  // Get pathname directly
  const pathname = usePathname() || '';
  
  // Process segments - this is safe as long as we're consistent
  const segments = pathname === '/' ? [] : pathname.split('/').filter(Boolean);
  
  // Use a single consistent class for both mobile and desktop
  // This ensures hydration matching
  const linkClasses = "border-b border-white md:border-zinc-800 md:hover:border-zinc-600 md:hover:text-white md:transition-colors";
  
  return (
    <>
      {/* Mobile version */}
      <div className="md:hidden font-medium text-sm tracking-tight fixed bottom-6 left-0 right-0 z-10">
        <div className="absolute inset-x-0 top-0 bottom-[-100vh] bg-zinc-900/70 backdrop-blur-md"></div>
        <div className="relative px-4 py-2">
          <div className="max-w-[65ch] mx-auto">
            <span className="text-zinc-500">. / </span>
            <Link href="/" className={linkClasses}>home</Link>
            {segments.length > 0 && segments.map((segment, index) => (
              <span key={index}>
                <span className="text-zinc-500"> / </span>
                <Link 
                  href={`/${segments.slice(0, index + 1).join('/')}`} 
                  className={linkClasses}
                >
                  {segment}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Desktop version */}
      <div className="hidden md:block font-medium text-sm tracking-tight">
        <span className="text-zinc-500">. / </span>
        <Link href="/" className={linkClasses}>home</Link>
        {segments.length > 0 && segments.map((segment, index) => (
          <span key={index}>
            <span className="text-zinc-500"> / </span>
            <Link 
              href={`/${segments.slice(0, index + 1).join('/')}`} 
              className={linkClasses}
            >
              {segment}
            </Link>
          </span>
        ))}
      </div>
    </>
  );
} 