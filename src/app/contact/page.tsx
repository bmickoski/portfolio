import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Open to frontend and full-stack roles in Angular or React. Get in touch via LinkedIn.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold leading-tight">Contact</h1>
        <p className="text-base leading-7" style={{ color: "var(--muted)" }}>
          Open to frontend and full-stack roles in Angular or React. If you’re hiring or
          want to talk through something architecture-related, feel free to reach out.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        <a
          href="https://www.linkedin.com/in/bojan-mickoski-b756a8ab/"
          target="_blank"
          rel="noreferrer"
          className="btn-primary inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm hover:opacity-90"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/bmickoski"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:opacity-80"
        >
          GitHub ↗
        </a>
        <a
          href="/Bojan-Mickoski-CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:opacity-80"
        >
          Download CV
        </a>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Good fit for</h2>
        <ul className="space-y-2 pl-5 text-sm leading-7" style={{ listStyleType: "disc", color: "var(--muted)" }}>
          <li>Frontend or full-stack teams working in Angular or React/Next.js</li>
          <li>Products dealing with legacy modernization or incremental migration</li>
          <li>Teams building or scaling shared component platforms</li>
          <li>Roles where architecture decisions and tradeoffs are part of the job</li>
        </ul>
      </section>

      <p className="text-sm leading-6" style={{ color: "var(--muted)" }}>
        Best way to reach me is LinkedIn. A short note about what you’re building or
        hiring for goes a long way.
      </p>
    </div>
  );
}
