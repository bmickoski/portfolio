import Link from "next/link";

const tiles = [
  {
    title: "Incremental modernization",
    meta: "AngularJS → Web Components → Angular",
    desc: "A migration strategy that reduces rewrite risk while keeping delivery moving through stable contracts and incremental rollout.",
    href: "/case-studies/incremental-modernization",
    tags: ["Architecture", "Migration", "Web Components"],
  },
  {
    title: "UI platform engineering",
    meta: "Monorepo + versioning + Storybook",
    desc: "Shared UI libraries with predictable releases, living documentation, and workflows that scale across multiple apps.",
    href: "/case-studies/ui-platform",
    tags: ["UI Platform", "Monorepo", "Release Engineering"],
  },
  {
    title: "Performance + reliability",
    meta: "≈30% perf + contracts + mocking",
    desc: "Measured performance improvements plus guardrails (contracts + mocks) to reduce integration surprises in production.",
    href: "/case-studies/performance-reliability",
    tags: ["Performance", "Reliability", "Testing"],
  },
];

const skills = [
  "UI Architecture",
  "Modernization",
  "Angular",
  "React/Next.js",
  "Component Platforms",
  "Testing & Contracts",
  "Performance",
  "DX & Tooling",
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="space-y-5">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight">
          I build UI architecture that scales — and stays predictable in production.
        </h1>

        <p className="max-w-2xl text-base leading-7" style={{ color: "var(--muted)" }}>
          Frontend engineer focused on architecture decisions, incremental modernization,
          performance, and reliability. I like explicit tradeoffs, clear boundaries,
          and measurable outcomes.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/case-studies"
            className="rounded-md border px-4 py-2 text-sm hover:opacity-80"
          >
            View case studies
          </Link>

          <a
            href="/Bojan-Mickoski-CV.pdf"
            className="rounded-md border px-4 py-2 text-sm hover:opacity-80"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>

          <Link
            href="/contact"
            className="rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-90"
          >
            Contact
          </Link>
        </div>

        {/* Proof line (lightweight, high-signal) */}
        <div className="rounded-xl border p-4">
          <p className="text-sm leading-6" style={{ color: "var(--muted)" }}>
            Recent themes: <span className="font-medium" style={{ color: "var(--fg)" }}>incremental migration without rewrites</span>,{" "}
            <span className="font-medium" style={{ color: "var(--fg)" }}>shared UI platforms</span>, and{" "}
            <span className="font-medium" style={{ color: "var(--fg)" }}>~30% performance improvements</span> with{" "}
            <span className="font-medium" style={{ color: "var(--fg)" }}>contract-based reliability</span>.
          </p>
        </div>
      </section>

      {/* Skills snapshot */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Focus areas</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="rounded-full border px-3 py-1 text-xs">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Case study tiles */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-lg font-semibold">Selected case studies</h2>
          <Link href="/case-studies" className="text-sm hover:underline" style={{ color: "var(--muted)" }}>
            See all →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {tiles.map((t) => (
            <Link key={t.href} href={t.href} className="hover-lift rounded-xl border p-5 hover:shadow-sm">
              <div className="text-xs" style={{ color: "var(--muted)" }}>
                {t.meta}
              </div>
              <h3 className="mt-2 font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>
                {t.desc}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span key={tag} className="rounded-full border px-3 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
