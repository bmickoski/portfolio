"use client";

import { useEffect, useMemo, useState } from "react";

export function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const id = useMemo(() => "mmd-" + Math.random().toString(16).slice(2), []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const mermaid = (await import("mermaid")).default;

        // Initialize once per runtime; safe to call multiple times
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
        });

        const { svg } = await mermaid.render(id, chart);

        if (!cancelled) {
          setSvg(svg);
          setError(null);
        }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? "Failed to render diagram");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (error) {
    return (
      <div className="not-prose rounded-xl border p-4">
        <div className="text-sm font-medium">Diagram error</div>
        <pre className="mt-2 overflow-auto text-xs text-gray-700">{error}</pre>
      </div>
    );
  }

  return (
    <div className="not-prose rounded-xl border bg-white p-4">
      {svg ? (
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <div className="text-sm text-gray-600">Rendering diagram…</div>
      )}
    </div>
  );
}
