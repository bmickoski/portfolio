import type { MDXComponents } from "mdx/types";

import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { DecisionRecord } from "@/components/case-study/DecisionRecord";
import { Outcomes } from "@/components/case-study/Outcomes";
import { Constraints } from "@/components/case-study/Constraints";
import { BackToCaseStudies } from "./components/case-study/BackToCaseStudies";
import { Mermaid } from "@/components/case-study/Mermaid";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    BackToCaseStudies,
    CaseStudyHeader,
    DecisionRecord,
    Outcomes,
    Constraints,
    Mermaid,
    ...components,
  };
}
