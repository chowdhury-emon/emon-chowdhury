import { SectionHeader } from "./section-header";

const ROWS = [
  {
    period: "Ongoing",
    kind: "Independent",
    title: "Independent Software Development",
    org: "Self-directed practice",
    description:
      "Modern frontend work, component architecture, authentication, API integration and application data management.",
    tags: ["React", "Next.js", "Node"],
  },
  {
    period: "Class of 2026",
    kind: "Education",
    title: "BSc Computer Science & Engineering",
    org: "BUBT — Bangladesh",
    description:
      "CGPA 3.67 / 4.00, last reported. Final result pending publication.",
    tags: ["CSE"],
  },
  {
    period: "Batch 14A",
    kind: "Bootcamp",
    title: "AI-Driven Full Stack Engineering",
    org: "Programming Hero",
    description:
      "Backend development, databases, authentication and full-stack application architecture.",
    tags: ["Full-stack"],
  },
] as const;

export function Practice() {
  return (
    <section id="practice" className="shell scroll-mt-24 py-20 md:py-28">
      <SectionHeader
        index="04"
        title="Practice"
        note="Independent work and formal study."
      />

      <div className="mt-10 border-t border-line md:mt-12">
        {ROWS.map((row) => (
          <article
            key={row.title}
            className="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:gap-6 md:py-10"
          >
            <div className="label flex gap-3 text-muted md:col-span-3 md:flex-col md:gap-2">
              <span>{row.period}</span>
              <span className="text-muted/60">{row.kind}</span>
            </div>

            <div className="md:col-span-6">
              <h3 className="display text-[clamp(1.75rem,3.6vw,2.9rem)] leading-[0.95]">
                {row.title}
              </h3>
              <p className="label mt-3 text-muted">{row.org}</p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
                {row.description}
              </p>
            </div>

            <ul className="label flex flex-wrap gap-x-4 gap-y-2 text-muted md:col-span-3 md:justify-end md:self-start">
              {row.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
