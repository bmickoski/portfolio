export function Constraints(props: { title?: string; items: string[] }) {
  return (
    <section className="not-prose rounded-xl border p-5">
      <h2 className="text-base font-semibold">{props.title ?? "Constraints"}</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
        {props.items.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}
