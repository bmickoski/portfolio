import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";
import { CaseStudyRotator } from "@/components/case-study/CaseStudyRotator";

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

        <div className="rounded-xl border p-4">
          <p className="text-sm leading-6" style={{ color: "var(--muted)" }}>
            Recent themes:{" "}
            <span className="font-medium" style={{ color: "var(--fg)" }}>
              incremental migration without rewrites
            </span>
            ,{" "}
            <span className="font-medium" style={{ color: "var(--fg)" }}>
              shared UI platforms
            </span>{" "}
            and{" "}
            <span className="font-medium" style={{ color: "var(--fg)" }}>
              measurable performance improvements
            </span>{" "}
            with{" "}
            <span className="font-medium" style={{ color: "var(--fg)" }}>
              contract-based reliability
            </span>
            .
          </p>
        </div>
      </section>

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

      <CaseStudyRotator items={caseStudies} count={3} />
    </div>
  );
}
