/*
  Everything a visitor can read or click lives in this file. The pages read from it.
  An empty string hides its button or link. Never put a placeholder URL here.
  Screenshots go in public/work/. If a real file has different dimensions, update w and h
  (they only reserve space while the image loads; the image keeps its own shape).
*/

export type Shot = { src: string; alt: string; w: number; h: number };

export type DemoSlug = "gigboard" | "sidekick" | "chaser";

export type Demo = {
  slug: DemoSlug;
  title: string;
  kind: string;
  summary: string;
  highlights: string[];
  codeUrl: string;
  liveUrl: string;
  stack: string[];
  shots: { home: Shot; second: Shot; mobile: Shot };
  problem: string;
  features: string[];
  details: { title: string; body: string }[];
  forClients: string;
};

export const site = {
  name: "Bilal",
  role: "Full-stack developer",
  location: "Lahore, Pakistan",
  timezone: "UTC+5",
  description:
    "Bilal is a freelance full-stack developer in Lahore. Web apps, SaaS MVPs and AI chatbots, shown through three demo builds with their code.",
  /** e.g. "name@example.com" */
  email: "",
  /** full https URL of the Upwork profile */
  upworkUrl: "",
  /** full https URL of the GitHub profile (the code links suggest https://github.com/bilal404up) */
  githubUrl: "",
  /** the deployed address of this site, e.g. "https://bilal.dev". Used for share previews. */
  url: "",
};

export const demos: Demo[] = [
  {
    slug: "gigboard",
    title: "Gigboard",
    kind: "Freelance marketplace",
    summary: "A marketplace for fixed-price gigs, where the payment is held until the buyer approves the work.",
    highlights: ["Payment held until the buyer approves the work", "Separate buyer, seller and admin sides", "Checkout with Stripe in test mode"],
    codeUrl: "https://github.com/bilal404up/gigboard",
    liveUrl: "",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe (test mode)"],
    shots: {
      home: { src: "/work/gigboard-home.png", alt: "Gigboard home page: a black split-flap board listing gigs with seller, delivery time, price and rating.", w: 1440, h: 900 },
      second: { src: "/work/gigboard-gig.png", alt: "A Gigboard gig page with three packages, a price breakdown and a note that payment is held until the buyer approves.", w: 1440, h: 900 },
      mobile: { src: "/work/gigboard-mobile.png", alt: "Gigboard home page on a phone.", w: 390, h: 844 },
    },
    problem:
      "Buyers worry about paying for work they haven’t seen. Sellers worry about doing work that never gets paid. Gigboard holds the payment in the middle until the buyer approves.",
    features: [
      "Fixed-price gigs with three packages and a delivery date",
      "Payment held until the buyer approves, then released to the seller",
      "Separate buyer, seller and admin sides",
      "Search, categories, reviews and seller levels",
      "Checkout through Stripe in test mode",
      "A split-flap board on the home page that shows gigs from the database",
    ],
    details: [
      { title: "Money in the middle", body: "When a buyer pays, the order shows the payment as held. It goes to the seller only when the buyer approves the work." },
      { title: "Numbers that come from somewhere", body: "Job counts and ratings on the board are read from orders and reviews in the database, not typed in by hand." },
      { title: "Three sides, one codebase", body: "Buyers, sellers and an admin each get their own screens, and the demo lets you switch between them from the menu." },
    ],
    forClients: "If you need a marketplace, a booking site or anything where one side pays another for work, this is the kind of build I’d start from.",
  },
  {
    slug: "sidekick",
    title: "Sidekick",
    kind: "Support chatbot",
    summary: "A support chatbot that only answers from a shop’s own FAQ, and says so when it doesn’t know.",
    highlights: ["Shows the FAQ entry behind every answer", "Says it doesn’t know and asks the owner instead of guessing", "Adds to any website with one line of code"],
    codeUrl: "https://github.com/bilal404up/sidekick",
    liveUrl: "",
    stack: ["Next.js", "TypeScript", "Tailwind", "OpenAI API (optional)"],
    shots: {
      home: { src: "/work/sidekick-home.png", alt: "Sidekick home page: a live chat, the FAQ it answers from and the owner’s inbox, side by side.", w: 1280, h: 720 },
      second: { src: "/work/sidekick-admin.png", alt: "The Sidekick owner inbox, where questions the FAQ didn’t cover wait for an answer.", w: 1280, h: 720 },
      mobile: { src: "/work/sidekick-mobile.png", alt: "Sidekick on a phone, answering a question about shipping.", w: 390, h: 844 },
    },
    problem:
      "Most chatbots guess when they don’t know, and a wrong answer about refunds or shipping costs a shop money. Sidekick only answers from the shop’s FAQ, shows where each answer came from, and hands anything else to the owner.",
    features: [
      "Answers come word for word from the shop’s FAQ",
      "Every answer shows the FAQ entry it came from",
      "Questions the FAQ doesn’t cover go to the owner’s inbox",
      "The owner writes the answer once, and the bot uses it from then on",
      "Emails and phone numbers are removed before a chat is saved",
      "Adds to any website with one line of code",
      "An optional language model that only sees the one matched entry",
    ],
    details: [
      { title: "It would rather say no", body: "If no FAQ entry matches closely enough, it says it doesn’t know and sends the question to the owner, instead of guessing." },
      { title: "Every answer can be checked", body: "Each reply shows the FAQ entry it came from and how closely the question matched it." },
      { title: "Private by default", body: "Email addresses and phone numbers are stripped out before a conversation is saved." },
    ],
    forClients: "If your customers ask the same questions every day and a wrong answer would cost you, this is the kind of assistant I can set up on your own FAQ and documents.",
  },
  {
    slug: "chaser",
    title: "Chaser",
    kind: "Invoice reminder tool",
    summary: "An invoice tracker for freelancers that counts the days overdue and writes reminders that get firmer the longer an invoice is late.",
    highlights: ["Counts the days and puts the oldest invoice on top", "Writes reminders that get firmer over time", "Free and Pro plans with Stripe billing in test mode"],
    codeUrl: "https://github.com/bilal404up/chaser",
    liveUrl: "",
    stack: ["Next.js", "TypeScript", "Tailwind", "Stripe (test mode)"],
    shots: {
      home: { src: "/work/chaser-home.png", alt: "Chaser home page: late invoices shown as paper slips, with the days overdue in large type.", w: 1280, h: 960 },
      second: { src: "/work/chaser-invoices.png", alt: "The Chaser invoice list, with overdue invoices sorted oldest first and a form to add a new one.", w: 1280, h: 960 },
      mobile: { src: "/work/chaser-mobile.png", alt: "Chaser home page on a phone.", w: 780, h: 1688 },
    },
    problem:
      "Chasing late invoices is awkward, so it gets put off, and the longer it waits the harder it gets. Chaser keeps the count and writes the reminder, so the freelancer only has to send it.",
    features: [
      "Overdue invoices sorted oldest first, with the days counted",
      "Reminder drafts that get firmer as an invoice ages, from a friendly nudge to a final notice",
      "Copy the reminder and send it from your own email",
      "Free and Pro plans, with billing through Stripe in test mode",
      "An admin view across all accounts",
    ],
    details: [
      { title: "The oldest is always on top", body: "Overdue invoices are sorted by days late, so the one that needs chasing most is the first thing you see." },
      { title: "The tone does the work", body: "Reminders get firmer as an invoice ages, so you don’t have to find the words for an awkward email." },
      { title: "Plans and limits", body: "The free plan has a limit on open invoices, and upgrading goes through Stripe checkout in test mode." },
    ],
    forClients: "If you need a dashboard, a client portal or a tool with paid plans, this is the kind of build I’d start from.",
  },
];

export type Service = { title: string; body: string; seenIn: DemoSlug[]; note?: string };

export const services: Service[] = [
  { title: "Web apps and SaaS MVPs", body: "Login, database, payments and an admin panel.", seenIn: ["gigboard", "chaser"] },
  { title: "AI chatbots", body: "Chatbots that answer from your own FAQ and documents.", seenIn: ["sidekick"] },
  { title: "OpenAI features", body: "OpenAI features added to an app you already have.", seenIn: ["sidekick"] },
  { title: "Dashboards, client portals and internal tools", body: "Screens that show your data clearly and let the right people act on it.", seenIn: ["chaser", "gigboard"] },
  {
    title: "Fixes for apps built with Lovable, Bolt, Replit or Cursor",
    body: "Broken login, exposed keys, Stripe webhooks and failed deploys.",
    seenIn: [],
    note: "No demo for this one. Send me the repo and a description of what’s going wrong.",
  },
];

export const steps: { title: string; body: string }[] = [
  { title: "You tell me what you need", body: "Plain words are fine. If anything is unclear, I ask before I guess." },
  { title: "You get a written plan", body: "Scope, milestones, price and timeline, in writing, before any work starts." },
  { title: "We start small", body: "The first milestone is small, so your risk is small too." },
  { title: "You see it as it grows", body: "A preview link at every milestone, so you check real work, not status updates." },
  { title: "It stays yours", body: "Code, hosting and API keys are set up in your name from the start." },
];

export const tools = ["React", "Next.js", "Node.js", "TypeScript", "Supabase (PostgreSQL)", "OpenAI API", "Stripe", "REST APIs"];

export type ContactLink = { kind: "upwork" | "email" | "github"; href: string; name: string; short: string; label: string };

/** Only the links that have a value. Empty values never produce a button. */
export function contactLinks(): ContactLink[] {
  const out: ContactLink[] = [];
  if (site.upworkUrl) out.push({ kind: "upwork", href: site.upworkUrl, name: "Upwork", short: "Message me", label: "Message me on Upwork" });
  if (site.email) out.push({ kind: "email", href: `mailto:${site.email}`, name: "Email", short: "Email me", label: "Email me" });
  if (site.githubUrl) out.push({ kind: "github", href: site.githubUrl, name: "GitHub", short: "GitHub", label: "See my GitHub" });
  return out;
}

/** The main way to reach Bilal: Upwork first, then email. Null when neither is set. */
export function primaryContact(): ContactLink | null {
  return contactLinks().find((l) => l.kind !== "github") ?? null;
}

export function getDemo(slug: string): Demo | undefined {
  return demos.find((d) => d.slug === slug);
}
