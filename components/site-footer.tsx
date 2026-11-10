import TextPressure from "./reactbits/TextPressure";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="shell">
        <div className="border-t border-white/15 pt-12 md:pt-16">
        <TextPressure
          text="Emon Chowdhury"
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic
          radius={0.5}
          smoothing={0.9}
          idle="wave"
          idleSpeed={0.3}
          clickRipple
          strokeColor="#ff5a1f"
          strokeWidth={3}
          minFontSize={36}
          scale={false}
        />
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-white/15 py-6 md:flex-row md:flex-wrap md:items-center md:justify-between">
        <p className="label text-paper/55">© 2026 Emon Chowdhury</p>
        <p className="label text-paper/55">
          Designed &amp; developed by Emon Chowdhury
        </p>
        <p className="label hidden text-paper/55 lg:block">
          Crafted with curiosity &amp; code
        </p>
        <a
          href="#main"
          className="label w-fit text-paper/70 transition-colors hover:text-paper"
        >
          Back to top ↑
        </a>
      </div>
    </div>
    </footer >
  );
}
