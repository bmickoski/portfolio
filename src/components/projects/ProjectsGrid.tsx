import { projects } from "@/content/projects";

export function ProjectsGrid() {
  return (
    <section id="projects" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-xl border p-5 gap-3"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm leading-6" style={{ color: "var(--muted)" }}>
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-2 py-0.5 text-xs"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 text-sm">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                  style={{ color: "var(--fg)" }}
                >
                  Live demo ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                  style={{ color: "var(--muted)" }}
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
