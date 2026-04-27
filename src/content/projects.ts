export type Project = {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "TeamPulse",
    description:
      "Full-stack SaaS dashboard for team productivity. Multi-tenant auth, role-based access, real-time activity feed via SSE, infinite pagination, and intercepting route modals.",
    tags: ["Next.js 15", "React 19", "TypeScript", "Drizzle ORM", "Neon", "NextAuth", "Vitest"],
    demo: "https://teampulse-ecru-sigma.vercel.app",
    github: "https://github.com/bmickoski/teampulse",
  },
  {
    title: "React Entity Picker Lab",
    description:
      "Production-style async entity selection with single and multi-select, keyboard-first accessibility, virtualization for 10k+ items, abortable search, and route-driven state hydration.",
    tags: ["React", "TypeScript", "Virtualization", "Accessibility", "Storybook"],
    demo: "https://react-entity-picker-lab.vercel.app",
    github: "https://github.com/bmickoski/react-entity-picker-lab",
  },
  {
    title: "Formly Form Builder",
    description:
      "Visual drag-and-drop form builder with a strict domain model. Left panel palette, center canvas with nested layout editing, right panel inspector, and live Formly preview.",
    tags: ["Angular", "Formly", "Drag & Drop", "Component Design"],
    demo: "https://bmickoski.github.io/formly-form-builder/",
    github: "https://github.com/bmickoski/formly-form-builder",
  },
];
