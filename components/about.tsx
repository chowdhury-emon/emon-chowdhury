import { SITE } from "@/lib/site";
import { CornerMarks } from "./corner-marks";
import { SectionHeader } from "./section-header";

const DETAILS = [
  { label: "Role", value: "Frontend Developer" },
  { label: "Based", value: "Dhaka, Bangladesh" },
  { label: "Education", value: "BSc CSE — BUBT" },
  { label: "Exploring", value: "Node · Express · MongoDB" },
] as const;

export function About() {
  return (
    <section id="about" className="shell scroll-mt-24 py-20 md:py-28">
      <SectionHeader
        index="01"
        title="Profile"
        note="Frontend first. Full-stack in progress."
      />

      <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="chrome-plate relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-ink/10">
            <div className="cover-grid cover-grid-light absolute inset-0 opacity-50" />
            <div className="relative flex h-full flex-col justify-between p-5 md:p-7">
              <div className="label flex items-start justify-between gap-4 text-ink/60">
                <span>[Plate 01]</span>
                <span>EC / 2026</span>
              </div>
              <p className="display text-[clamp(7rem,18vw,13rem)] leading-[0.72] tracking-[-0.05em] text-ink/80">
                EC
              </p>
              <div className="label flex items-start justify-between gap-4 text-ink/60">
                <span>Dhaka, BD</span>
                <span>{SITE.availability}</span>
              </div>
            </div>
            <CornerMarks className="m-3 text-ink/30" />
          </div>
          <p className="label mt-3 text-muted">[Fig. 01 — Monogram]</p>
        </div>

        <div className="lg:col-span-7 lg:flex lg:flex-col lg:pt-2">
          <h3 className="display text-[clamp(2.45rem,5.4vw,4.9rem)] leading-[0.9] tracking-[-0.015em]">
            Frontend by craft.
            <br />
            Full-stack by curiosity.
          </h3>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted md:text-base">
            I am Emon, a frontend developer with a Computer Science
            background. I care about the spacing, the motion and the small
            details that make an interface feel right. Right now I am
            expanding into backend development with Node, Express and MongoDB.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 lg:mt-auto">
            {DETAILS.map((detail) => (
              <div key={detail.label} className="flex flex-col gap-2">
                <dt className="label text-muted">{detail.label}</dt>
                <dd className="text-sm">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
