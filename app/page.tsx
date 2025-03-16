import Link from 'next/link';

export default function Home() {
  return (
    <article className="content-spacing">
      <h1 className="text-4xl font-semibold mb-6">gard aanstad</h1>
      
      <p className="text-balance">
        21 år gammel student ved uio. liker maskinlæring og byutvikling.
      </p>

      <h2 className="text-2xl font-semibold">prosjekter</h2>
      
      <ul className="space-y-4 list-disc pl-5">
        <li>
          <Link 
            href="/lille-norske-sprakmodell" 
            className="font-medium border-b border-white md:border-zinc-800 md:hover:border-zinc-600 md:hover:text-white md:transition-colors"
            prefetch={true}
          >
            lille norske språkmodell
          </Link>
          <p className="mt-1 text-sm">
            egen implementasjon av en generativ forhåndstrent transformer (GPT)-basert språkmodell, ved bruk av pytorch.
          </p>
        </li>
        <li>
          <Link 
            href="/bedreoslo" 
            className="font-medium border-b border-white md:border-zinc-800 md:hover:border-zinc-600 md:hover:text-white md:transition-colors"
            prefetch={true}
          >
            bedreoslo.no
          </Link>
          <p className="mt-1 text-sm">
            en nettside for organisasjonen bedre oslo. next.js react, tailwind css, vercel.
          </p>
        </li>
      </ul>
    </article>
  );
}
