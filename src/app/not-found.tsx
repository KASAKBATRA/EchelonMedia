import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: 'var(--bg-primary)' }}
    >
      <section className="max-w-xl text-center">
        <p
          className="text-sm uppercase tracking-[0.2em] mb-4"
          style={{ color: 'var(--color-muted)' }}
        >
          404
        </p>
        <h1
          className="font-display text-5xl md:text-6xl mb-4"
          style={{ color: 'var(--color-primary)' }}
        >
          Page not found
        </h1>
        <p className="text-base mb-8" style={{ color: 'var(--color-muted)' }}>
          The page you requested does not exist or may have been moved.
        </p>
        <Link
          href="/homepage"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold"
          style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}
        >
          Back to homepage
        </Link>
      </section>
    </main>
  );
}
