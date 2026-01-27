"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";

function pickRandomK<T>(arr: T[], k: number): T[] {
  const copy = [...arr];
  // Fisher-Yates shuffle (in-place on copy)
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(k, copy.length));
}

export function CaseStudyRotator({
  items,
  count = 3,
}: {
  items: CaseStudy[];
  count?: number;
}) {
  // deterministic initial render to avoid hydration mismatch
  const initial = useMemo(() => items.slice(0, count), [items, count]);
  const [visible, setVisible] = useState<CaseStudy[]>(initial);

  function shuffle() {
    setVisible(pickRandomK(items, count));
  }

  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Selected case studies</h2>
          <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
            Decisions, tradeoffs, and outcomes—kept practical and production-focused.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={shuffle}
            className="rounded-md border px-3 py-2 text-sm hover:opacity-80"
          >
            Shuffle
          </button>

          <Link
            href="/case-studies"
            className="text-sm hover:underline"
            style={{ color: "var(--muted)" }}
          >
            See all →
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {visible.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="hover-lift rounded-xl border p-5 hover:shadow-sm"
          >
            <h3 className="font-semibold">{t.title}</h3>
            <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>
              {t.subtitle}
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
  );
}
