import Link from "next/link";

export function BackToCaseStudies() {
  return (
    <div className="not-prose">
      <Link className="text-sm hover:underline" href="/case-studies">
        ← Back to case studies
      </Link>
    </div>
  );
}
