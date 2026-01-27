import Link from "next/link";

const tiles = [
  {
    title: "Incremental modernization (AngularJS → Web Components → Angular)",
    desc: "Migration strategy that reduces rewrite risk while keeping delivery moving.",
    href: "/case-studies/incremental-modernization",
  },
  {
    title: "UI platform engineering (Monorepo + versioning + Storybook)",
    desc: "Reusable UI libraries with predictable releases and living documentation.",
    href: "/case-studies/ui-platform",
  },
  {
    title: "Performance + reliability (≈30% perf, Pact, Prism)",
    desc: "Faster UI and safer integrations with contracts and API mocking.",
    href: "/case-studies/performance-reliability",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold leading-tight">
          I build scalable UI systems that don&apos;t surprise you in production.
        </h1>
        <p className="max-w-2xl" style={{ color: "var(--muted)" }}>
          Frontend engineer focused on architecture, modernization strategies,
          performance, and reliability.
        </p>
        <div className="flex gap-3">
          <Link
            href="/case-studies"
            className="rounded-md border px-4 py-2 text-sm hover:bg-gray-50"
          >
            View case studies
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-90"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {tiles.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="rounded-xl border p-5 hover:shadow-sm"
          >
            <h2 className="font-semibold">{t.title}</h2>
            <p className="mt-2 text-sm text-gray-700">{t.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
