import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, GitHub } from "@/components/icons";
import { ProjectCover } from "@/components/project-cover";
import { getNextProject, getProject, PROJECTS } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.name,
    description: `${project.tagline} ${project.category}.`,
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: `${project.category}. ${project.tagline}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const next = getNextProject(project.slug);

  return (
    <article className="pt-16">
      <div className="shell pt-8 md:pt-12">
        <nav
          aria-label="Breadcrumb"
          className="label flex flex-wrap items-center justify-between gap-3 text-muted"
        >
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Selected work
          </Link>
          <span>
            [{project.index} / {String(PROJECTS.length).padStart(2, "0")}]
          </span>
        </nav>

        <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label text-muted">{project.category}</p>
            <h1 className="display mt-4 text-[clamp(3.2rem,12vw,11rem)] leading-[0.82]">
              {project.name}
            </h1>
            <p className="mt-4 max-w-md text-base text-muted md:text-lg">
              {project.tagline}
            </p>
          </div>

          <dl className="lg:col-span-4 lg:border-l lg:border-line lg:pl-6">
            <div className="flex items-baseline justify-between gap-4 border-t border-line py-3 lg:border-t-0 lg:py-0">
              <dt className="label text-muted">Year</dt>
              <dd className="text-sm">{project.year}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-t border-line py-3">
              <dt className="label text-muted">Role</dt>
              <dd className="text-sm">{project.role}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-t border-line py-3">
              <dt className="label text-muted">Status</dt>
              <dd className="flex items-center gap-2 text-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/30 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
                </span>
                {project.status}
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-ink/10 sm:aspect-[16/9] md:mt-12 md:aspect-[21/9]">
          <ProjectCover project={project} size="hero" />
        </div>
      </div>

      <div className="shell mt-16 grid gap-12 md:mt-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="label text-muted">[Overview]</h2>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed md:text-2xl">
            {project.overview}
          </p>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <h2 className="label text-muted">[Links]</h2>
          <ul className="mt-4 border-t border-line">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-line py-3.5 transition-colors hover:bg-ink/[0.035]"
                >
                  <span className="flex items-center gap-2.5 text-sm">
                    {link.kind === "live" ? (
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-ink"
                      />
                    ) : (
                      <GitHub className="h-4 w-4" />
                    )}
                    {link.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell mt-16 grid gap-8 md:mt-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <h2 className="label text-muted">[Scope]</h2>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            The work that shaped this build.
          </p>
        </div>
        <ul className="border-t border-line lg:col-span-8">
          {project.focus.map((item, index) => (
            <li
              key={item}
              className="flex items-baseline gap-5 border-b border-line py-4 md:gap-8"
            >
              <span className="label text-muted">
                0{index + 1}
              </span>
              <span className="text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="shell mt-16 grid gap-8 md:mt-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <h2 className="label text-muted">[Stack]</h2>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            What the project is built with.
          </p>
        </div>
        <ul className="flex flex-wrap gap-2 lg:col-span-8">
          {project.stack.map((tool) => (
            <li
              key={tool}
              className="label rounded-full border border-line px-3.5 py-2"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <div className="shell mt-16 grid gap-8 md:mt-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <h2 className="label text-muted">[Build notes]</h2>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            How the pieces connect.
          </p>
        </div>
        <div className="lg:col-span-8">
          <ul className="border-t border-line">
            {project.notes.map((note, index) => (
              <li
                key={note}
                className="flex gap-5 border-b border-line py-5 md:gap-8"
              >
                <span className="label text-muted">0{index + 1}</span>
                <p className="max-w-xl text-sm leading-relaxed">{note}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-[1.25rem] border border-dashed border-line p-6">
            <p className="label text-muted">[In progress]</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Challenges, solutions, lessons and screenshots are documented as
              the project evolves.
            </p>
          </div>
        </div>
      </div>

      <div className="shell mt-16 md:mt-24">
        <Link
          href={`/projects/${next.slug}`}
          className="group block border-t border-line py-8 md:py-10"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="label text-muted">
              [Next project] {next.index}
            </span>
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
          <p className="display mt-4 text-[clamp(2.5rem,8vw,7rem)] leading-none transition-transform duration-500 group-hover:translate-x-2">
            {next.name}
          </p>
          <p className="label mt-3 text-muted">{next.category}</p>
        </Link>
      </div>

      <div className="pb-10 md:pb-16" />
    </article>
  );
}
