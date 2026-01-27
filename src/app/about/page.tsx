export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold leading-tight">About</h1>
        <p style={{ color: "var(--muted)" }}>
          I focus on building UI systems that scale: clear boundaries, predictable releases,
          measurable performance, and safer integrations.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">How I work</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li><span className="font-medium">Start with constraints:</span> legacy realities, delivery pressure, ownership boundaries.</li>
          <li><span className="font-medium">Make tradeoffs explicit:</span> options, risks, and why the chosen path wins.</li>
          <li><span className="font-medium">Build guardrails:</span> versioning discipline, contracts, and test surfaces.</li>
          <li><span className="font-medium">Measure outcomes:</span> performance improvements, fewer surprises, faster delivery.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Focus areas</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border p-4">
            <div className="font-medium">Modernization</div>
            <p className="mt-1 text-sm text-gray-700">
              Incremental upgrades without risky rewrites.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <div className="font-medium">UI Platforms</div>
            <p className="mt-1 text-sm text-gray-700">
              Reusable components, documentation, and predictable release workflows.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <div className="font-medium">Performance</div>
            <p className="mt-1 text-sm text-gray-700">
              Reduce render work, optimize loading, and keep UX fast as the product grows.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <div className="font-medium">Reliability</div>
            <p className="mt-1 text-sm text-gray-700">
              Contracts and guardrails to prevent integration surprises.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
