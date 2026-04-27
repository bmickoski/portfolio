import type { Metadata } from "next";
import { caseStudies } from "@/content/caseStudies";
import { CaseStudySearch } from "@/components/case-study/CaseStudySearch";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Architecture decisions, tradeoffs, and outcomes from real production frontend work. Modernization, UI platforms, performance, and reliability.",
};

export default function CaseStudiesIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Case Studies</h1>
      <p className="text-base leading-7" style={{ color: "var(--muted)" }}>
        Architecture decisions, tradeoffs, and outcomes. Kept practical and production-focused.
      </p>

      <CaseStudySearch items={caseStudies} />
    </div>
  );
}
