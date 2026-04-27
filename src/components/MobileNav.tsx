"use client";

import { useState } from "react";
import Link from "next/link";

const links: { href: string; label: string; external?: boolean }[] = [
  { href: "/#projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/Bojan-Mickoski-CV.pdf", label: "Download CV", external: true },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="rounded-md border px-3 py-2 text-sm hover:opacity-80"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 top-full z-50 border-b"
          style={{ background: "var(--bg)", borderColor: "var(--border)" }}
        >
          <nav className="mx-auto flex max-w-5xl flex-col px-4">
            {links.map((l) =>
              l.external ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="border-b py-4 text-sm last:border-b-0 hover:opacity-70"
                  style={{ color: "var(--fg)", borderColor: "var(--border)" }}
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b py-4 text-sm last:border-b-0 hover:opacity-70"
                  style={{ color: "var(--fg)", borderColor: "var(--border)" }}
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
