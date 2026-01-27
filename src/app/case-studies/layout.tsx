export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <article className="case-prose">{children}</article>
    </div>
  );
}
