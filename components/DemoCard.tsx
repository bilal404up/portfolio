import Link from "next/link";
import { BrowserFrame, PhoneFrame } from "@/components/Frames";
import type { Demo } from "@/lib/site";
import { cx } from "@/lib/cx";

/* One build on the home page: screenshots on one side, what it is and what to look at on the other. Alternates sides on desktop. */
export function DemoCard({ demo, index }: { demo: Demo; index: number }) {
  const flip = index % 2 === 1;
  const href = `/work/${demo.slug}`;

  return (
    <article id={demo.slug} aria-labelledby={`${demo.slug}-title`} className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
      {/* the text link below is the keyboard and screen reader route; this one is for pointer users */}
      <Link href={href} tabIndex={-1} aria-hidden="true" className={cx("group relative block pb-6 lg:col-span-7", flip && "lg:order-2")}>
        <div className="lift">
          <BrowserFrame shot={demo.shots.home} sizes="(min-width: 1024px) 640px, 100vw" />
        </div>
        <PhoneFrame shot={demo.shots.mobile} crop="9 / 19" sizes="140px" className="absolute bottom-0 right-3 w-[24%] sm:right-6 lg:w-[22%]" />
      </Link>

      <div className={cx("lg:col-span-5", flip && "lg:order-1")}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge-demo">Demo</span>
          <span className="text-sm text-muted">{demo.kind}</span>
        </div>
        <h3 id={`${demo.slug}-title`} className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
          {demo.title}
        </h3>
        <p className="mt-3 text-lg leading-relaxed">{demo.summary}</p>
        <ul className="mt-5 grid gap-2.5 text-[0.95rem] text-muted">
          {demo.highlights.map((h) => (
            <li key={h} className="flex gap-3 leading-relaxed">
              <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted">Built with {demo.stack.join(", ")}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href={href} className="btn btn-primary">
            See how {demo.title} works
          </Link>
          {demo.liveUrl ? (
            <a href={demo.liveUrl} className="btn btn-secondary">
              Open the live demo
            </a>
          ) : null}
          {demo.codeUrl ? (
            <a href={demo.codeUrl} className="btn btn-secondary">
              Read the code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
