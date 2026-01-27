import { caseStudies } from "@/content/caseStudies";
import { CaseStudySearch } from "@/components/case-study/CaseStudySearch";

export default function CaseStudiesIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Case Studies</h1>
      <p className="text-gray-700">
        Architecture decisions, tradeoffs, and outcomes—kept practical and
        production-focused.
      </p>

      <CaseStudySearch items={caseStudies} />
    </div>
  );
}
