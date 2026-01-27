import { ThemeToggle } from "@/components/ThemeToggle";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bojan Mickoski — Frontend Architect",
  description:
    "Case studies in UI architecture, modernization, and reliability.",
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
              {/* <nav className="flex gap-6 text-sm">...</nav> */}
              <ThemeToggle />
            </div>
            <nav className="flex gap-6 text-sm">
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
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-600">
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
