import type { ProjectSummary } from "@/lib/projects";

type ProjectCoverProps = {
  project: ProjectSummary;
  size?: "card" | "hero";
};

const TONE = {
  dark: "bg-ink text-paper",
  light: "stone-plate text-ink",
  chrome: "chrome-plate text-ink",
} as const;

function Rings() {
  return (
    <div className="absolute -right-[16%] top-1/2 aspect-square w-[82%] -translate-y-1/2 sm:w-[64%]">
      <span className="absolute inset-0 rounded-full border border-paper/15" />
      <span className="absolute inset-[12%] rounded-full border border-paper/12" />
      <span className="absolute inset-[24%] rounded-full border border-paper/10" />
      <span className="absolute inset-[36%] rounded-full border border-paper/10" />
      <span className="chrome-plate absolute inset-[43%] rounded-full shadow-[0_0_70px_rgba(255,255,255,0.22)]" />
      <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full border border-paper/30" />
      <span className="absolute bottom-[18%] left-[18%] h-1.5 w-1.5 rounded-full bg-paper/60" />
    </div>
  );
}

function PriceChart() {
  return (
    <div className="absolute inset-y-0 right-0 h-full w-[58%] text-ink/80">
      <svg
        viewBox="0 0 420 280"
        preserveAspectRatio="none"
        fill="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="chart-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="currentColor" stopOpacity="0" />
            <stop offset="0.16" stopColor="currentColor" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M0 232 58 202 108 218 160 168 214 186 272 126 330 144 390 82 420 68"
          stroke="url(#chart-line)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span
        aria-hidden="true"
        className="absolute grid place-items-center"
        style={{ left: "92.8%", top: "29.3%" }}
      >
        <span className="absolute h-6 w-6 rounded-full border border-current opacity-35" />
        <span className="relative block h-2.5 w-2.5 rounded-full bg-[linear-gradient(140deg,#ffffff,#a9aeb4_45%,#eef0f1)]" />
      </span>
    </div>
  );
}

function Bars() {
  return (
    <div className="absolute bottom-0 right-0 flex h-[58%] w-[62%] items-end gap-[3%] pr-[2%] sm:w-[46%]">
      {[42, 66, 50, 84, 58, 100, 72].map((height, i) => (
        <span
          key={i}
          className="flex-1 border border-ink/10 bg-ink/85"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

function CoverArt({ project }: { project: ProjectSummary }) {
  if (project.slug === "shongjog") return <Rings />;
  if (project.slug === "bazardor") return <PriceChart />;
  return <Bars />;
}

export function ProjectCover({ project, size = "card" }: ProjectCoverProps) {
  const nameSize =
    size === "hero"
      ? "text-[clamp(2.6rem,7.4vw,7rem)]"
      : "text-[clamp(1.8rem,4.6vw,3.4rem)]";

  return (
    <div className={`absolute inset-0 ${TONE[project.tone]}`}>
      <div
        className={`cover-grid absolute inset-0 opacity-70 ${
          project.tone === "dark" ? "cover-grid-dark" : "cover-grid-light"
        }`}
      />
      <CoverArt project={project} />
      <div className="cover-sheen pointer-events-none absolute inset-0 z-10" />

      <div className="relative z-20 flex h-full flex-col justify-between p-5 md:p-7 lg:p-8">
        <div className="label flex items-start justify-between gap-4 opacity-75">
          <span className="flex min-w-0 gap-2">
            <span className="shrink-0">[{project.index}]</span>
            <span className="min-w-0">{project.category}</span>
          </span>
          <span className="shrink-0">{project.year}</span>
        </div>

        <div className="flex items-end justify-between gap-6">
          <div className="min-w-0">
            <p className={`display leading-[0.9] ${nameSize}`}>
              {project.name}
            </p>
            <p className="label mt-3 max-w-[24ch] opacity-70">
              {project.tagline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
