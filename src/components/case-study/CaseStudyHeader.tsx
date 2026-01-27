export function CaseStudyHeader(props: {
  title: string;
  subtitle?: string;
  tags?: string[];
}) {
  return (
    <header className="not-prose space-y-3">
      <div>
        <h1 className="text-3xl font-semibold leading-tight">{props.title}</h1>
        {props.subtitle ? (
          <p className="mt-2 max-w-2xl text-gray-700">{props.subtitle}</p>
        ) : null}
      </div>

      {props.tags?.length ? (
        <ul className="flex flex-wrap gap-2">
          {props.tags.map((t) => (
            <li key={t} className="rounded-full border px-3 py-1 text-xs">
              {t}
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
