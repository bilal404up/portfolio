import { contactLinks, site } from "@/lib/site";

const INCLUDE = ["What it should do", "Who will use it", "Any deadline or budget", "Links to anything that already exists"];

/* The last section on the home page. Hidden entirely when there is no way to make contact. */
export function ContactSection() {
  const links = contactLinks();
  if (!links.length) return null;

  return (
    <section id="contact" aria-labelledby="contact-title" className="on-dark bg-night py-16 text-paper lg:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="contact-title" className="title-lg">
            Tell me what you’re trying to build.
          </h2>
          <p className="mt-5 max-w-copy text-lg leading-relaxed text-night-muted">
            A few lines is enough. I’ll reply with questions, or with a short written plan.
          </p>
        </div>
        <div className="lg:col-span-5">
          <p className="font-semibold">Helpful to include</p>
          <ul className="mt-3 grid gap-2 text-night-muted">
            {INCLUDE.map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            {links.map((l, i) => (
              <a key={l.kind} href={l.href} className={i === 0 ? "btn btn-light" : "btn btn-dark-outline"}>
                {l.label}
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm text-night-muted">
            I’m in {site.location}, {site.timezone}. Work and payment go through Upwork, with milestones.
          </p>
        </div>
      </div>
    </section>
  );
}
