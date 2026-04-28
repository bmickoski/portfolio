import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNav } from "@/components/MobileNav";
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
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.dataset.theme='dark';}}catch(e){}`
        }} />
      </head>
      <body>
        <header className="relative border-b">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold">
              Bojan Mickoski
            </Link>

            <div className="flex items-center gap-3">
              <nav className="hidden gap-6 text-sm md:flex">
                <Link className="hover:underline" href="/#projects">
                  Projects
                </Link>
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
                className="btn-primary hidden rounded-md px-3 py-2 text-sm hover:opacity-90 md:inline-flex"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>

              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        <footer className="border-t">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between" style={{ color: "var(--muted)" }}>
            <p>
              Some details are generalized to respect confidentiality. Happy to discuss
              deeper decisions and tradeoffs in conversation.
            </p>
            <div className="flex shrink-0 gap-4">
              <a
                href="https://www.linkedin.com/in/bojan-mickoski-b756a8ab/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/bmickoski"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
