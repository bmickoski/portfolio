import { ThemeToggle } from "@/components/ThemeToggle";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bojan Mickoski — Frontend Architect",
    template: "%s — Bojan Mickoski",
  },
  description:
    "Frontend engineer focused on UI architecture, modernization, performance, and reliability. Case studies with decisions, tradeoffs, and outcomes.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Bojan Mickoski — Frontend Architect",
    description:
      "UI architecture case studies: modernization, scalable UI platforms, performance & reliability.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bojan Mickoski — Frontend Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bojan Mickoski — Frontend Architect",
    description:
      "UI architecture case studies: modernization, scalable UI platforms, performance & reliability.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold">
              Bojan Mickoski
            </Link>

            <div className="flex items-center gap-3">
              <nav className="hidden gap-6 text-sm md:flex">
                <Link className="hover:underline" href="/case-studies">
                  Case Studies
                </Link>
                <Link className="hover:underline" href="/about">
                  About
                </Link>
                <Link className="hover:underline" href="/contact">
                  Contact
                </Link>
              </nav>

              <a
                href="/Bojan-Mickoski-CV.pdf"
                className="rounded-md bg-black px-3 py-2 text-sm text-white hover:opacity-90"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>

              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm" style={{ color: "var(--muted)" }}>
            <p>
              Some details are generalized to respect confidentiality. Happy to
              discuss deeper technical decisions and tradeoffs in conversation.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
