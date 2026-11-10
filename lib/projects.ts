export type ProjectTone = "dark" | "light" | "chrome";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "code";
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  category: string;
  tagline: string;
  year: string;
  role: string;
  status: string;
  featured?: boolean;
  tone: ProjectTone;
  overview: string;
  focus: string[];
  stack: string[];
  /** Short, differentiating stack shown on the work card. */
  cardStack: string[];
  notes: string[];
  links: ProjectLink[];
};

export type ProjectSummary = Pick<
  Project,
  | "slug"
  | "index"
  | "name"
  | "category"
  | "tagline"
  | "year"
  | "featured"
  | "tone"
  | "cardStack"
>;

export const PROJECTS: Project[] = [
  {
    slug: "shongjog",
    index: "01",
    name: "Shongjog",
    category: "Full-stack event platform",
    tagline: "Connecting people. Creating change.",
    year: "2026",
    role: "Full-stack development",
    status: "Live",
    featured: true,
    tone: "dark",
    overview:
      "A community event platform for discovering, organizing and joining social initiatives — built end to end, from interface to database.",
    focus: [
      "Event discovery and browsing",
      "Event organization and management",
      "User authentication",
      "Community engagement",
      "Full-stack application architecture",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "MongoDB",
      "Express",
    ],
    cardStack: ["Next.js", "Express", "MongoDB"],
    notes: [
      "Next.js App Router frontend, typed with TypeScript and styled with Tailwind CSS.",
      "Better Auth backed by the MongoDB adapter for sessions and access control.",
      "A separate Express API reads and writes to MongoDB for event data.",
    ],
    links: [
      {
        label: "Live site",
        href: "https://shongjog-emon.vercel.app",
        kind: "live",
      },
      {
        label: "Repository",
        href: "https://github.com/chowdhury-emon/shongjog",
        kind: "code",
      },
      {
        label: "API repo",
        href: "https://github.com/chowdhury-emon/shongjog-backend",
        kind: "code",
      },
    ],
  },
  {
    slug: "bazardor",
    index: "02",
    name: "BazarDor",
    category: "Grocery price tracker",
    tagline: "Know the market before you shop.",
    year: "2026",
    role: "Frontend and authentication",
    status: "Live",
    tone: "light",
    overview:
      "A Bangladesh-focused price tracker for everyday groceries. Browse products, compare market ranges and follow how prices move.",
    focus: [
      "Email authentication",
      "Google and GitHub sign-in",
      "User profile management",
      "Grocery price exploration",
      "Market comparison and tracking",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Better Auth",
      "MongoDB",
    ],
    cardStack: ["Next.js", "Better Auth", "MongoDB"],
    notes: [
      "Authentication built with Better Auth: email, Google and GitHub providers over MongoDB.",
      "Product and category data comes from the Programming Hero open API.",
      "Market ranges and sorting are handled on top of the fetched product data.",
    ],
    links: [
      {
        label: "Live site",
        href: "https://bazardor-emon.vercel.app",
        kind: "live",
      },
      {
        label: "Repository",
        href: "https://github.com/chowdhury-emon/bazardor",
        kind: "code",
      },
    ],
  },
  {
    slug: "fitlog",
    index: "03",
    name: "Fitlog",
    category: "Workout planner",
    tagline: "A plan you will actually follow.",
    year: "2026",
    role: "Frontend development",
    status: "Live",
    tone: "chrome",
    overview:
      "A workout planning app that turns a library of exercises into a daily routine — with saved workouts and sorting that keeps decisions simple.",
    focus: [
      "Workout library",
      "Daily workout planning",
      "Saved workouts",
      "Sorting by duration, calories and rating",
      "Workout detail pages",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Toastify",
      "React Icons",
    ],
    cardStack: ["Next.js", "TypeScript", "Tailwind"],
    notes: [
      "Built with the Next.js App Router and a TypeScript data model for workouts.",
      "Daily plans and saved workouts are managed on the client with clear state.",
      "Sorting and detail views keep the library quick to scan and compare.",
    ],
    links: [
      {
        label: "Live site",
        href: "https://fitlog-emon.vercel.app",
        kind: "live",
      },
      {
        label: "Repository",
        href: "https://github.com/chowdhury-emon/fitlog",
        kind: "code",
      },
    ],
  },
];

export const PROJECT_SUMMARIES: ProjectSummary[] = PROJECTS.map(
  ({ slug, index, name, category, tagline, year, featured, tone, cardStack }) => ({
    slug,
    index,
    name,
    category,
    tagline,
    year,
    featured,
    tone,
    cardStack,
  }),
);

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = PROJECTS.findIndex((project) => project.slug === slug);
  return PROJECTS[(index + 1) % PROJECTS.length];
}
