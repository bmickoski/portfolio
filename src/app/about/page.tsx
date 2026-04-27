import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "9 years of frontend engineering in Angular and enterprise products, now fluent in React and Next.js too. Open to frontend and full-stack roles where architecture decisions matter.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold leading-tight">About</h1>
        <p className="text-base leading-7" style={{ color: "var(--muted)" }}>
          I'm a frontend engineer with 9 years of experience, mostly in Angular and large-scale
          enterprise products. Over that time my work shifted toward architecture: designing
          component platforms, driving modernization without rewrites, improving performance,
          and building the kind of boundaries that let teams move independently.
        </p>
        <p className="text-base leading-7" style={{ color: "var(--muted)" }}>
          In the last year I've been going deep on React and Next.js alongside Angular.
          The job market is heavily React and I wanted to be genuinely fluent in both, not
          just familiar with one. I built TeamPulse to cover real production concerns:
          multi-tenant auth, role-based access, real-time updates, server actions, and
          patterns like intercepting routes that you don't pick up from tutorials.
          The architecture thinking carries across. The syntax is different.
        </p>
        <p className="text-base leading-7" style={{ color: "var(--muted)" }}>
          I'm looking for frontend or full-stack roles in Angular or React where architecture
          decisions matter, not just feature delivery.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        <a
          href="/Bojan-Mickoski-CV.pdf"
          className="inline-flex rounded-md border px-4 py-2 text-sm hover:opacity-80"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
        <a
          href="https://www.linkedin.com/in/bojan-mickoski-b756a8ab/"
          className="inline-flex rounded-md border px-4 py-2 text-sm hover:opacity-80"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/bmickoski"
          className="inline-flex rounded-md border px-4 py-2 text-sm hover:opacity-80"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">How I work</h2>
        <ul className="space-y-3 pl-5" style={{ listStyleType: "disc", color: "var(--muted)" }}>
          <li>
            <span className="font-medium" style={{ color: "var(--fg)" }}>Start with constraints.</span>{" "}
            Legacy realities, delivery pressure, and team ownership boundaries shape what's actually buildable.
          </li>
          <li>
            <span className="font-medium" style={{ color: "var(--fg)" }}>Make tradeoffs explicit.</span>{" "}
            I'd rather document why option A wins over B than leave it implicit in the code.
          </li>
          <li>
            <span className="font-medium" style={{ color: "var(--fg)" }}>Build guardrails early.</span>{" "}
            Versioning discipline, contracts, and test surfaces prevent integration surprises later.
          </li>
          <li>
            <span className="font-medium" style={{ color: "var(--fg)" }}>Measure outcomes.</span>{" "}
            Performance improvements, fewer incidents, faster delivery — if it can't be observed, it's hard to trust.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Focus areas</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border p-4">
            <div className="font-medium">Modernization</div>
            <p className="mt-1 text-sm leading-6" style={{ color: "var(--muted)" }}>
              Incremental upgrades without risky rewrites. Module-by-module with stable contracts between old and new.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <div className="font-medium">UI Platforms</div>
            <p className="mt-1 text-sm leading-6" style={{ color: "var(--muted)" }}>
              Shared component libraries, monorepo tooling, Storybook as a product, and predictable release workflows.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <div className="font-medium">Performance</div>
            <p className="mt-1 text-sm leading-6" style={{ color: "var(--muted)" }}>
              Reduce render work, optimize loading, keep UX fast as the product grows. Measurable before and after.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <div className="font-medium">Reliability</div>
            <p className="mt-1 text-sm leading-6" style={{ color: "var(--muted)" }}>
              Contract testing, API mocking, and integration guardrails that catch breaks before they reach production.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
