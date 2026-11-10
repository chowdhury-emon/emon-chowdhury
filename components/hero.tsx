import Image from "next/image";
import { SITE } from "@/lib/site";
import { ArrowDown, ArrowUpRight, Download } from "./icons";
import { CornerMarks } from "./corner-marks";
import Magnet from "./reactbits/Magnet";
import WarpText from "./reactbits/WarpText";

const FACTS = [
  { label: "Role", value: SITE.role },
  { label: "Focus", value: "React · Next.js · TypeScript" },
  { label: "Base", value: SITE.location },
  { label: "Status", value: SITE.availability },
] as const;

export function Hero() {
  return (
    <section id="top" className="pt-16">
      <div className="shell relative flex min-h-[calc(100svh-4rem)] flex-col">
        <CornerMarks className="hidden text-ink/25 md:block" />

        <div className="label flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line py-3 text-muted">
          <span>[Portfolio — 2026]</span>
          <span className="hidden sm:inline">
            Frontend developer / Full-stack in progress
          </span>
          <span>Dhaka, BD — GMT+6</span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-10 md:py-14">
          <div className="grid items-end gap-8 md:grid-cols-12 md:gap-6 lg:gap-10">
            <div className="md:col-span-8">
              <h1 className="sr-only">
                Engineer your visions into experiences
              </h1>
              <div aria-hidden="true" className="text-ink">
                <WarpText
                  text={"ENGINEERING & CRAFTING \nYOUR VISIONS INTO \nEXPERIENCES."}
                  align="left"
                  color="var(--color-ink)"
                  fontFamily="var(--font-anton)"
                  fontSize="clamp(3.35rem, 11.2vw, 10.8rem)"
                  fontWeight={400}
                  letterSpacing="-0.015em"
                  lineHeight={0.94}
                  warpStrength={0.06}
                  warpScale={1.6}
                  speed={0.35}
                  pointerInfluence={0.34}
                  pointerStrength={0.26}
                  refraction={0.012}
                  chromatic={0}
                  idleDrift={0.1}
                  lens="bulge"
                  className="w-full"
                  style={{ height: "clamp(9rem, 34vw, 34rem)" }}
                />
              </div>
            </div>

            <figure className="relative mx-auto w-full max-w-52 sm:max-w-160 md:col-span-4 md:mx-0 md:max-w-160 md:justify-self-end xl:max-w-160">
              <div className="chrome-plate rounded-4xl p-1.5 shadow-[0_30px_60px_-38px_rgba(11,11,11,0.65)]">
                <div className="relative aspect-video overflow-hidden rounded-[1.7rem] bg-ink ring-1 ring-ink/20">
                  <Image
                    src="/hero.jpeg"
                    alt="Portrait of Emon Chowdhury"
                    fill
                    priority
                    quality={300}
                    sizes="(min-width: 1280px) 304px, (min-width: 768px) 240px, 208px"
                    className="object-cover object-center grayscale"
                  />
                </div>
              </div>
            </figure>
          </div>

          <div className="mt-9 grid gap-7 border-t border-line pt-5 md:mt-11 md:grid-cols-12 md:items-center md:gap-6">
            <p className="max-w-sm text-sm leading-relaxed text-muted md:col-span-5">
              I build considered interfaces with React, Next.js and
              TypeScript and I am extending that into full-stack.
            </p>
            <p className="label hidden text-muted md:col-span-3 md:col-start-6 md:block">
              [Design-minded engineering]
              <br />
              [Logic, motion, detail]
            </p>
            <div className="flex flex-wrap gap-2 md:col-span-4 md:justify-end">
              <Magnet
                padding={56}
                magnetStrength={9}
                maxOffset={12}
                spring={{ stiffness: 220, damping: 18, mass: 0.8 }}
              >
                <a
                  href="#work"
                  className="label inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-paper transition-transform duration-300 hover:-translate-y-0.5"
                >
                  See selected work
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>
              </Magnet>
              <Magnet
                padding={56}
                magnetStrength={9}
                maxOffset={12}
                spring={{ stiffness: 220, damping: 18, mass: 0.8 }}
              >
                <a
                  href={SITE.resumePath}
                  download
                  className="label group inline-flex items-center gap-2.5 rounded-full border border-line px-5 py-3 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  Résumé
                  <Download className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Magnet>
            </div>
          </div>

          <a
            href={`mailto:${SITE.email}`}
            className="label mt-6 inline-flex w-fit items-center gap-2 text-muted transition-colors hover:text-ink md:mt-7"
          >
            {SITE.email}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line py-5 md:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-2">
              <dt className="label text-muted">{fact.label}</dt>
              <dd className="flex items-center gap-2 text-sm">
                {fact.label === "Status" ? (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/30 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
                  </span>
                ) : null}
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
