import Link from 'next/link';
import InlineLink from './components/InlineLink';

export default function Home() {
  return (
    <article className="content-spacing">
      <h1 className="mb-4">gard aanstad</h1>
      
      <p>
        21 år gammel student ved uio. liker maskinlæring og byutvikling.
      </p>

      <div className="mt-12">
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
              nettsiden til bedreoslo
            </Link>
            <p className="mt-1">
              en nettside for organisasjonen bedre oslo. next.js react & tailwind css.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="mb-3">lenker</h2>
        <ul className="space-y-3 list-disc pl-5">
          <li>
            <InlineLink 
              href="https://www.linkedin.com/in/gard-aanstad/"
              text="linkedin"
              icon={
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              }
            />
          </li>
          <li>
            <InlineLink
              href="https://github.com/gardaanstad"
              text="github"
              icon={
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              }
            />
          </li>
          <li>
            <InlineLink
              href="https://bsky.app/profile/gard.bsky.social"
              text="bluesky"
              icon={
                <svg width="100%" height="100%" viewBox="0 0 600 530" version="1.1" xmlns="http://www.w3.org/2000/svg" className="size-4">
                  <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"
                    fill="currentColor"/>
                </svg>
              }
            />
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="mb-3">om meg</h2>
        <p>
          jeg går tredje året på bachelor i informatikk: språkteknologi på uio (språkteknologi handler egentlig om generell maskinlæring og KI, ikke kun språk). jeg er også interessert i byutvikling (sjekk bluesky-en min!) og jobber med hvordan vi kan bruke maskinlæring til å forbedre byene våre. 
        </p>

        <p className="mt-3">
          jeg driver også <Link href="https://www.bedreoslo.no" className="font-medium">bedre oslo</Link>!
        </p>
      </div>
    </article>
  );
}
