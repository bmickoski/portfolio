"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";

export function CaseStudySearch({ items }: { items: CaseStudy[] }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string>("All");

  const tags = useMemo(() => {
    const all = new Set<string>();
    items.forEach((i) => i.tags.forEach((t) => all.add(t)));
    return ["All", ...Array.from(all).sort()];
  }, [items]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((i) => {
      const matchesTag = tag === "All" || i.tags.includes(tag);
      const matchesText =
        !query ||
        i.title.toLowerCase().includes(query) ||
        i.subtitle.toLowerCase().includes(query) ||
        i.tags.join(" ").toLowerCase().includes(query);
      return matchesTag && matchesText;
    });
  }, [items, q, tag]);

  return (
    <div className="not-prose space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <label className="text-sm font-medium">Search</label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try: migration, performance, monorepo…"
            className="mt-2 w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <div className="w-full md:w-64">
          <label className="text-sm font-medium">Tag</label>
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="mt-2 w-full rounded-md border px-3 py-2 text-sm"
          >
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="hover-lift block rounded-xl border p-5 hover:shadow-sm"
          >
            <div className="font-semibold">{i.title}</div>
            <div className="mt-1 text-sm text-gray-700">{i.subtitle}</div>

            <div className="mt-3 flex flex-wrap gap-2">
              {i.tags.map((t) => (
                <span key={t} className="rounded-full border px-3 py-1 text-xs">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}

        {filtered.length === 0 ? (
          <div className="rounded-xl border p-5 text-sm text-gray-700">
            No matches. Try a different keyword or tag.
          </div>
        ) : null}
      </div>
    </div>
  );
}
