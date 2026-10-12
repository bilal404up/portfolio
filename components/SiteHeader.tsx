import Link from "next/link";
import { primaryContact, site } from "@/lib/site";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "How I work" },
];

export function SiteHeader() {
  const contact = primaryContact();
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="inline-flex min-h-[44px] items-center gap-2.5 font-semibold">
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full bg-ink font-display text-lg text-paper">
            B
          </span>
          {site.name}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hidden min-h-[44px] items-center rounded-full px-3 text-sm font-medium text-muted transition-colors duration-150 hover:text-ink md:inline-flex"
            >
              {n.label}
            </Link>
          ))}
          {contact ? (
            <a href={contact.href} className="btn btn-primary ml-2 px-4 text-sm">
              {contact.short}
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
