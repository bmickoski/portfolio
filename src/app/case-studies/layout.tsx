export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className="case-prose">{children}</article>;
}
