export function Outcomes(props: { items: { label: string; detail?: string }[] }) {
  return (
    <section className="not-prose rounded-xl border p-5">
      <h2 className="text-base font-semibold">Outcomes</h2>
      <ul className="mt-3 grid gap-3 md:grid-cols-2">
        {props.items.map((i) => (
          <li key={i.label} className="rounded-lg bg-gray-50 p-3">
            <div className="font-medium">{i.label}</div>
            {i.detail ? <div className="mt-1 text-sm text-gray-700">{i.detail}</div> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
