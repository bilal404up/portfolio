import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: { default: `${site.name}: web apps and AI chatbots`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: `${site.name}: web apps and AI chatbots`, description: site.description, type: "website" },
};

export const viewport: Viewport = { themeColor: "#FBFAF7" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
