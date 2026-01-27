export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold leading-tight">Contact</h1>
        <p style={{ color: "var(--muted)" }}>
          If you want to discuss architecture decisions, modernization strategy, or building
          a scalable UI platform, I’m happy to chat.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What I can help with</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>Legacy modernization plans (incremental, low-risk)</li>
          <li>UI component platforms (shared libraries + release discipline)</li>
          <li>Performance improvement plans (measured, targeted)</li>
          <li>Reliability guardrails (contracts, test surfaces, safer integrations)</li>
        </ul>
      </section>

      <section className="rounded-xl border p-5">
  <a
    href="https://www.linkedin.com/in/bojan-mickoski-b756a8ab/"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-90"
  >
    Connect on LinkedIn
    <span aria-hidden>↗</span>
  </a>
  <p className="mt-3 text-sm text-gray-700">
    Feel free to message me with a short note about what you’re building or hiring for.
  </p>
</section>


    </div>
  );
}
