import Link from 'next/link';

export default function Root() {
  return (
    <article className="content-spacing">
      <h1 className="mb-4">du fant roten!</h1>
      <p>
        ikke så mye å finne på her. <Link href="/">gå tilbake</Link>?
      </p>
    </article>
  );
}
