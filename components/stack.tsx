import { SectionHeader } from "./section-header";

const GROUPS = [
  {
    index: "01",
    label: "Frontend",
    note: "Daily",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Angular",
    ],
  },
  {
    index: "02",
    label: "Backend",
    note: "Expanding",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    index: "03",
    label: "Auth",
    note: "Shipped",
    items: ["Better Auth", "Firebase Auth", "OAuth"],
  },
  {
    index: "04",
    label: "Tools",
    note: "Daily",
    items: ["Git", "GitHub", "VS Code", "npm"],
  },
  {
    index: "05",
    label: "Learning",
    note: "In progress",
    items: [
      "Architecture",
      "Database design",
      "Data structures",
      "Problem solving",
    ],
  },
] as const;

export function Stack() {
  return (
    <section id="stack" className="shell scroll-mt-24 py-20 md:py-28">
      <SectionHeader
        index="03"
        title="Toolkit"
        note="Selected, not exhaustive. No percentages."
      />

      <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="display text-[clamp(2.3rem,4.8vw,4.2rem)] leading-[0.95]">
            React, Next.js,
            <br />
            TypeScript,
            <br />
            JavaScript.
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
            The core stack. Everything else supports the interface.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="border-t border-line">
            {GROUPS.map((group) => (
              <div
                key={group.label}
                className="grid grid-cols-12 gap-x-4 gap-y-3 border-b border-line py-5"
              >
                <div className="col-span-12 flex items-baseline gap-3 sm:col-span-3">
                  <span className="label text-muted">[{group.index}]</span>
                  <span className="label">{group.label}</span>
                </div>
                <ul className="col-span-9 flex flex-wrap gap-x-4 gap-y-2 text-sm sm:col-span-6">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="label col-span-3 self-start text-muted sm:text-right">
                  {group.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
