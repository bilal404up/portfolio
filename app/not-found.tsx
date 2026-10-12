import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main id="main" className="wrap py-24">
      <p className="eyebrow">404</p>
      <h1 className="title-lg mt-3">That page isn’t here.</h1>
      <p className="mt-4 max-w-copy leading-relaxed text-muted">The link may be old, or the address may have a typo.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Go to the home page
        </Link>
        <Link href="/#work" className="btn btn-secondary">
          See the work
        </Link>
      </div>
    </main>
  );
}
