export type CaseStudy = {
  title: string;
  subtitle: string;
  href: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Incremental modernization without a rewrite",
    subtitle:
      "AngularJS → Web Components → Angular with contract-driven boundaries.",
    href: "/case-studies/incremental-modernization",
    tags: ["Architecture", "Migration", "Web Components"],
  },
  {
    title: "Building a scalable UI platform",
    subtitle:
      "Monorepo libraries, predictable versioning, and Storybook as a product.",
    href: "/case-studies/ui-platform",
    tags: ["UI Platform", "Monorepo", "Release Engineering"],
  },
  {
    title: "Performance + reliability in production frontends",
    subtitle:
      "≈30% performance improvement plus contract testing + API mocking.",
    href: "/case-studies/performance-reliability",
    tags: ["Performance", "Reliability", "Testing"],
  },
];
