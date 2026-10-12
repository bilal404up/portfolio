import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrowserFrame, PhoneFrame } from "@/components/Frames";
import { demos, getDemo, primaryContact } from "@/lib/site";

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return demos.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const demo = getDemo(params.slug);
  if (!demo) return {};
  return { title: `${demo.title}, a ${demo.kind.toLowerCase()} demo`, description: demo.summary };
}

export default function WorkPage({ params }: Params) {
  const demo = getDemo(params.slug);
  if (!demo) notFound();

  const i = demos.findIndex((d) => d.slug === demo.slug);
  const next = demos[(i + 1) % demos.length];
  const contact = primaryContact();

  return (
    <main id="main">
      <section className="wrap pb-10 pt-6 sm:pt-10">
        <Link href="/#work" className="link inline-flex min-h-[44px] items-center text-sm">
          All work
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="badge-demo">Demo</span>
          <span className="text-sm text-muted">{demo.kind}</span>
        </div>
        <h1 className="mt-3 font-display text-5xl leading-[1.02] tracking-[-0.01em] sm:text-7xl">{demo.title}</h1>
        <p className="mt-5 max-w-copy text-xl leading-relaxed text-muted">{demo.summary}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          {demo.liveUrl ? (
            <a href={demo.liveUrl} className="btn btn-primary">
              Open the live demo
            </a>
          ) : null}
          {demo.codeUrl ? (
            <a href={demo.codeUrl} className={demo.liveUrl ? "btn btn-secondary" : "btn btn-primary"}>
              Read the code on GitHub
            </a>
          ) : null}
        </div>
        <p className="mt-4 max-w-copy text-sm text-muted">
          Built for this portfolio with invented data.
          {demo.liveUrl ? null : " There’s no live link yet, so the screenshots below are from the running app."}
        </p>
      </section>

      <div className="wrap">
        <BrowserFrame shot={demo.shots.home} priority sizes="(min-width: 1152px) 1088px, 100vw" />
      </div>

      <section aria-label="Overview" className="wrap grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <h2 className="title-lg">The problem</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{demo.problem}</p>
        </div>
        <div className="lg:col-span-7">
          <h2 className="title-lg">What it does</h2>
          <ul className="mt-6 grid gap-3">
            {demo.features.map((f) => (
              <li key={f} className="flex gap-3 leading-relaxed">
                <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-accent">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="More screens" className="border-y border-line bg-white py-16">
        <div className="wrap grid items-start gap-10 lg:grid-cols-12">
          <BrowserFrame shot={demo.shots.second} sizes="(min-width: 1024px) 720px, 100vw" className="lg:col-span-8" />
          <PhoneFrame shot={demo.shots.mobile} sizes="240px" className="mx-auto w-full max-w-[15rem] lg:col-span-4" />
        </div>
      </section>

      <section aria-labelledby="details-title" className="wrap py-16 lg:py-24">
        <h2 id="details-title" className="title-lg">
          Details worth a look
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {demo.details.map((d) => (
            <li key={d.title} className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <h3 className="text-lg font-semibold leading-snug">{d.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{d.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <h3 className="font-semibold">Built with</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {demo.stack.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="like-this-title" className="on-dark bg-night py-16 text-paper">
        <div className="wrap grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="like-this-title" className="title-lg">
              Need something like this?
            </h2>
            <p className="mt-4 max-w-copy text-lg leading-relaxed text-night-muted">{demo.forClients}</p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4">
            {contact ? (
              <a href={contact.href} className="btn btn-light">
                {contact.label}
              </a>
            ) : null}
            <Link href="/#process" className="btn btn-dark-outline">
              See how I work
            </Link>
          </div>
        </div>
      </section>

      <nav aria-label="More work" className="wrap py-10">
        <Link href={`/work/${next.slug}`} className="group flex min-h-[44px] flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="text-sm text-muted">Next build</span>
          <span className="font-display text-3xl transition-colors duration-150 group-hover:text-accent">
            {next.title}, {next.kind.toLowerCase()}
          </span>
        </Link>
      </nav>
    </main>
  );
}
