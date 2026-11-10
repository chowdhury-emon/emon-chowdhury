"use client";

import Link from "next/link";
import { useState } from "react";
import type { ProjectSummary } from "@/lib/projects";
import { ArrowUpRight, Grid, Rows } from "./icons";
import { ProjectCover } from "./project-cover";
import { SectionHeader } from "./section-header";
import Magnet from "./reactbits/Magnet";

type ViewMode = "list" | "grid";

export function WorkSection({ projects }: { projects: ProjectSummary[] }) {
  const [mode, setMode] = useState<ViewMode>("list");

  return (
    <section id="work" className="shell scroll-mt-24 py-20 md:py-28">
      <SectionHeader
        index="02"
        title="Selected work"
        note="Shongjog leads. Two more shipped and evolving."
      >
        <div
          role="group"
          aria-label="Project layout"
          className="hidden items-center gap-0.5 rounded-full border border-line p-1 xl:flex"
        >
          <Magnet
            padding={32}
            magnetStrength={6}
            maxOffset={5}
            spring={{ stiffness: 260, damping: 20, mass: 0.6 }}
          >
            <button
              type="button"
              onClick={() => setMode("list")}
              aria-pressed={mode === "list"}
              aria-label="One column layout"
              title="One column"
              className={`grid h-8 w-8 place-items-center rounded-full transition-colors ${
                mode === "list"
                  ? "bg-ink text-paper"
                  : "text-muted hover:text-ink"
              }`}
            >
              <Rows className="h-4 w-4" />
            </button>
          </Magnet>
          <Magnet
            padding={32}
            magnetStrength={6}
            maxOffset={5}
            spring={{ stiffness: 260, damping: 20, mass: 0.6 }}
          >
            <button
              type="button"
              onClick={() => setMode("grid")}
              aria-pressed={mode === "grid"}
              aria-label="Three column layout"
              title="Three columns"
              className={`grid h-8 w-8 place-items-center rounded-full transition-colors ${
                mode === "grid"
                  ? "bg-ink text-paper"
                  : "text-muted hover:text-ink"
              }`}
            >
              <Grid className="h-4 w-4" />
            </button>
          </Magnet>
        </div>
      </SectionHeader>

      <div
        className={`mt-10 grid gap-x-5 gap-y-12 md:mt-12 ${
          mode === "grid" ? "xl:grid-cols-3" : "grid-cols-1"
        }`}
      >
        {projects.map((project) => (
          <article
            key={`${project.slug}-${mode}`}
            className="card-in"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block"
              aria-label={`View ${project.name} case study`}
            >
              <div
                className={`relative overflow-hidden rounded-[1.4rem] border border-ink/10 ${
                  mode === "list"
                    ? "aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/8.2]"
                    : "aspect-[4/5]"
                }`}
              >
                <ProjectCover project={project} />
                <span
                  aria-hidden="true"
                  className={`absolute bottom-4 right-4 z-30 grid h-10 w-10 place-items-center rounded-full border backdrop-blur-md transition-colors duration-300 md:bottom-5 md:right-5 ${
                    project.tone === "dark"
                      ? "border-paper/35 bg-paper/12 text-paper group-hover:bg-paper group-hover:text-ink"
                      : "border-ink/20 bg-paper/55 text-ink group-hover:bg-ink group-hover:text-paper"
                  }`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div className="mt-4 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-x-4">
                <h3 className="sr-only">{project.name}</h3>
                <span className="label text-muted">
                  {project.cardStack.join(" · ")}
                </span>
                <span className="label link-line flex shrink-0 items-center gap-1.5 whitespace-nowrap">
                  {mode === "grid" ? "Case study" : "View case study"}
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
        <p className="label text-muted">[End of selected work]</p>
        <a
          href="https://github.com/chowdhury-emon"
          target="_blank"
          rel="noreferrer"
          className="label link-line flex items-center gap-2"
        >
          More on GitHub
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
