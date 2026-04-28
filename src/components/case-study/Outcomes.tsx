export function Outcomes(props: { items: { label: string; detail?: string }[] }) {
  return (
    <section className="not-prose rounded-xl border p-5">
      <h2 className="text-base font-semibold">Outcomes</h2>
      <ul className="mt-3 grid gap-3 md:grid-cols-2">
        {props.items.map((i) => (
          <li key={i.label} className="rounded-lg p-3" style={{ background: "var(--card)" }}>
            <div className="font-medium">{i.label}</div>
            {i.detail ? <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{i.detail}</div> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
