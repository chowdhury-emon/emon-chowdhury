import { SITE } from "@/lib/site";
import { DhakaClock } from "./dhaka-clock";
import { ArrowUpRight, Download, GitHub, LinkedIn } from "./icons";
import Magnet from "./reactbits/Magnet";
import ShinyText from "./reactbits/ShinyText";

const CHANNELS = [
  {
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneHref,
    icon: null,
    external: false,
  },
  {
    label: "GitHub",
    value: "@chowdhury-emon",
    href: SITE.github,
    icon: "github",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "in/chowdhury-emon",
    href: SITE.linkedin,
    icon: "linkedin",
    external: true,
  },
  {
    label: "Base",
    value: SITE.location,
    href: null,
    icon: null,
    external: false,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-ink text-paper"
    >
      <div className="shell py-20 md:py-28">
        <div className="label flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-white/15 pb-4 text-paper/60">
          <span>[05] Contact</span>
          <span className="hidden items-center gap-2 text-paper/70 sm:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper/40 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-paper" />
            </span>
            {SITE.availability}
          </span>
          <DhakaClock className="label text-paper/60" />
        </div>

        <h2 className="display mt-10 text-[clamp(2.85rem,8.8vw,8rem)] leading-[0.94]">
          <p>Let&apos;s build </p>
          <p>your next idea.</p>
        </h2>

        <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="label text-paper/60">[Start a conversation]</p>
            <a
              href={`mailto:${SITE.email}`}
              className="group mt-3 inline-flex max-w-full items-center gap-3"
            >
              <ShinyText
                text="emonc.dev@gmail.com"
                className="display chrome-text truncate text-[clamp(1.45rem,3.7vw,3.3rem)] leading-none transition-[filter] duration-300 group-hover:brightness-110"
                color="#8f949a"
                shineColor="#ffffff"
                speed={4}
                delay={1.2}
                angle={120}
                shineWidth={25}
                softness={0.9}
                glow={0.16}
                
              />
              <ArrowUpRight className="h-6 w-6 shrink-0 text-paper/70 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 md:col-span-4 md:justify-end">
            <Magnet
              padding={56}
              magnetStrength={9}
              maxOffset={12}
              spring={{ stiffness: 220, damping: 18, mass: 0.8 }}
            >
              <a
                href={SITE.resumePath}
                download
                className="label group inline-flex items-center gap-2.5 rounded-full border border-white/25 px-5 py-3 transition-colors hover:bg-paper hover:text-ink"
              >
                Download resume
                <Download className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Magnet>
            <Magnet
              padding={56}
              magnetStrength={9}
              maxOffset={12}
              spring={{ stiffness: 220, damping: 18, mass: 0.8 }}
            >
              <a
                href={`mailto:${SITE.email}`}
                className="label inline-flex items-center gap-2.5 rounded-full bg-paper px-5 py-3 text-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                Say hello
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Magnet>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((channel) => {
            const content = (
              <>
                <span className="label flex items-center gap-2 text-paper/60">
                  {channel.icon === "github" ? (
                    <GitHub className="h-3.5 w-3.5" />
                  ) : null}
                  {channel.icon === "linkedin" ? (
                    <LinkedIn className="h-3.5 w-3.5" />
                  ) : null}
                  {channel.label}
                </span>
                <span className="mt-2 flex items-center gap-2 text-sm">
                  {channel.value}
                  {channel.href ? (
                    <ArrowUpRight className="h-3.5 w-3.5 text-paper/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  ) : null}
                </span>
              </>
            );

            if (!channel.href) {
              return (
                <div key={channel.label} className="flex flex-col">
                  {content}
                </div>
              );
            }

            return (
              <a
                key={channel.label}
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="group flex flex-col"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
