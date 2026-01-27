type Option = {
  title: string;
  summary?: string;
};

export function DecisionRecord(props: {
  title?: string;
  problem: string;
  constraints?: string[];
  options: Option[];
  decision: string;
  rationale: string[];
}) {
  const {
    title = "Decision record",
    problem,
    constraints,
    options,
    decision,
    rationale,
  } = props;

  return (
    <section className="not-prose rounded-xl border p-5">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-base font-semibold">{title}</h2>
      </div>

      <div className="mt-4 space-y-4 text-sm">
        <div>
          <div className="font-medium">Problem</div>
          <p className="mt-1 text-gray-700">{problem}</p>
        </div>

        {constraints?.length ? (
          <div>
            <div className="font-medium">Constraints</div>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-700">
              {constraints.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div>
          <div className="font-medium">Options considered</div>
          <ul className="mt-2 space-y-2">
            {options.map((o) => (
              <li key={o.title} className="rounded-lg bg-gray-50 p-3">
                <div className="font-medium">{o.title}</div>
                {o.summary ? (
                  <div className="mt-1 text-gray-700">{o.summary}</div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border bg-white p-3">
          <div className="font-medium">Decision</div>
          <p className="mt-1 text-gray-700">{decision}</p>

          <div className="mt-3 font-medium">Why</div>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-700">
            {rationale.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
