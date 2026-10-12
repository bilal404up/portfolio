import { Fragment } from "react";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { DemoCard } from "@/components/DemoCard";
import { HeroCollage } from "@/components/HeroCollage";
import { demos, getDemo, primaryContact, services, site, steps, tools } from "@/lib/site";

export default function Home() {
  const contact = primaryContact();

  return (
    <main id="main">
      {/* Hero */}
      <section className="wrap grid gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10 lg:pb-24 lg:pt-20">
        <div>
          <p className="eyebrow rise">
            {site.name}, {site.role.toLowerCase()} in {site.location}
          </p>
          <h1 className="rise mt-4 font-display text-[2.9rem] leading-[1.02] tracking-[-0.01em] sm:text-6xl lg:text-[4.4rem]" style={{ animationDelay: "60ms" }}>
            Web apps and AI chatbots, built in steps <em className="italic text-accent">you can check.</em>
          </h1>
          <p className="rise mt-6 max-w-copy text-lg leading-relaxed text-muted" style={{ animationDelay: "120ms" }}>
            You get a written plan before any work starts, a preview link at every milestone, and code that stays in your name.
          </p>
          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "180ms" }}>
            {contact ? (
              <a href={contact.href} className="btn btn-primary">
                {contact.label}
              </a>
            ) : null}
            <Link href="#work" className="btn btn-secondary">
              See the three builds
            </Link>
          </div>
          <p className="rise mt-6 max-w-copy text-sm leading-relaxed text-muted" style={{ animationDelay: "220ms" }}>
            New on Upwork. The three builds below are the proof, with the code open to read.
          </p>
        </div>
        <HeroCollage />
      </section>

      {/* Work */}
      <section id="work" aria-labelledby="work-title" className="border-t border-line bg-white py-16 lg:py-24">
        <div className="wrap">
          <div className="max-w-copy">
            <p className="eyebrow">Work</p>
            <h2 id="work-title" className="title-lg mt-3">
              Three builds, with the code open to read.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              I built all three for this portfolio, with invented data, so you can see how I work before you hire me. Each one has sign-in, an admin side and a phone layout.
            </p>
          </div>
          <div className="mt-14 grid gap-20 lg:gap-28">
            {demos.map((demo, i) => (
              <DemoCard key={demo.slug} demo={demo} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" aria-labelledby="services-title" className="py-16 lg:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Services</p>
            <h2 id="services-title" className="title-lg mt-3">
              What I can build for you
            </h2>
            <p className="mt-4 leading-relaxed text-muted">Most projects are one of these. Where a build above shows it, there’s a link.</p>
          </div>
          <ul className="divide-y divide-line border-y border-line lg:col-span-8">
            {services.map((s) => {
              const seen = s.seenIn.map((slug) => getDemo(slug)).filter((d) => d !== undefined);
              return (
                <li key={s.title} className="grid gap-2 py-6 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-8">
                  <h3 className="text-lg font-semibold leading-snug">{s.title}</h3>
                  <div>
                    <p className="leading-relaxed text-muted">{s.body}</p>
                    {seen.length ? (
                      <p className="mt-2 text-sm text-muted">
                        See it in{" "}
                        {seen.map((d, i) => (
                          <Fragment key={d.slug}>
                            {i > 0 ? " and " : null}
                            <Link href={`/work/${d.slug}`} className="link">
                              {d.title}
                            </Link>
                          </Fragment>
                        ))}
                      </p>
                    ) : s.note ? (
                      <p className="mt-2 text-sm text-muted">{s.note}</p>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section id="process" aria-labelledby="process-title" className="border-y border-line bg-white py-16 lg:py-24">
        <div className="wrap">
          <div className="max-w-copy">
            <p className="eyebrow">How I work</p>
            <h2 id="process-title" className="title-lg mt-3">
              How working with me goes
            </h2>
          </div>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title}>
                <p aria-hidden="true" className="font-display text-5xl leading-none text-accent">
                  {i + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-sm text-muted">Work and payment stay on Upwork, with a milestone for each step.</p>
        </div>
      </section>

      {/* Honest proof */}
      <section aria-labelledby="proof-title" className="py-16 lg:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <h2 id="proof-title" className="title-lg">
              No reviews yet. Here’s what you can check instead.
            </h2>
            <p className="mt-5 max-w-copy text-lg leading-relaxed text-muted">
              I’m new on Upwork, so there are no client reviews on this site, and I won’t make any up. You can read the code behind every build, see how each one works, and get a written plan before you pay for anything. First jobs are priced fairly, with a clear scope.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-line lg:col-span-5">
            <h3 className="font-semibold">Tools I work with</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tools.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
            {site.githubUrl ? (
              <a href={site.githubUrl} className="btn btn-secondary mt-6 w-full">
                See all my code on GitHub
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
