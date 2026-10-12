import { contactLinks, site } from "@/lib/site";

export function SiteFooter() {
  const links = contactLinks();
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-muted">
            {site.role} in {site.location} ({site.timezone})
          </p>
          <p className="mt-3 max-w-copy text-sm text-muted">The three builds on this site are demos made for this portfolio, with invented data.</p>
        </div>
        {links.length ? (
          <ul className="-mx-2 flex flex-wrap">
            {links.map((l) => (
              <li key={l.kind}>
                <a href={l.href} className="inline-flex min-h-[44px] items-center px-2 text-sm font-medium underline-offset-4 hover:underline">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </footer>
  );
}
