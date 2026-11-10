import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Practice } from "@/components/practice";
import { Stack } from "@/components/stack";
import { WorkSection } from "@/components/work-section";
import { PROJECT_SUMMARIES } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WorkSection projects={PROJECT_SUMMARIES} />
      <Stack />
      <Practice />
      <Contact />
    </>
  );
}
