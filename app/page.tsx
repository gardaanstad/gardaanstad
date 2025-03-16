import Link from 'next/link';

export default function Home() {
  return (
    <article className="content-spacing">
      <h1 className="mb-4">gard aanstad</h1>
      
      <p className="mb-12">
        21 år gammel student ved uio. liker maskinlæring og byutvikling.
      </p>

      <h2 className="mb-3">prosjekter</h2>
      
      <ul className="space-y-3 list-disc pl-5">
        <li>
          <Link 
            href="/lille-norske-sprakmodell" 
            className="font-medium"
            prefetch={true}
          >
            lille norske språkmodell
          </Link>
          <p className="mt-1">
            egen implementasjon av en generativ forhåndstrent transformer (GPT)-basert språkmodell, ved bruk av pytorch.
          </p>
        </li>
        <li>
          <Link
            href="/bedreoslo" 
            className="font-medium"
            prefetch={true}
          >
            bedreoslo.no
          </Link>
          <p className="mt-1">
            en nettside for organisasjonen bedre oslo. next.js react & tailwind css.
          </p>
        </li>
      </ul>
    </article>
  );
}
