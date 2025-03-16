export default function BedreOsloPage() {
  return (
    <article className="content-spacing">      
      <h1 className="text-3xl font-semibold mb-4">nettsiden til bedre oslo</h1>
      
      <div className="prose max-w-none">
        <p className="text-balance">
          nettside om byutvikling i oslo. kort oppsummert jobber vi for flere boliger, tryggere gater og bedre kollektivt.
          <span className="inline-flex items-center ml-2">
            <a 
              href="https://github.com/gardaanstad/lille-norske-sprakmodell" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-b border-white md:border-zinc-800 md:hover:border-zinc-600 md:hover:text-white md:transition-colors"
            >
              besøk nettsiden
            </a>
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"/>
            </svg>
          </span>
        </p>
        
        <h2 className="text-2xl font-semibold mt-6">laget med</h2>
        <ul className="space-y-2 list-disc pl-5 mt-2">
          <li>next.js (wow!)</li>
          <li>tailwind css (fantastisk!)</li>
          <li>typescript (hva!)</li>
          <li>vercel (hvordan!?)</li>
        </ul>
      </div>
    </article>
  );
} 