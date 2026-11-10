import type { ReactNode } from "react";

type SectionHeaderProps = {
  index: string;
  title: string;
  note?: string;
  children?: ReactNode;
};

export function SectionHeader({
  index,
  title,
  note,
  children,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-t border-line pt-4">
      <div className="flex items-baseline gap-3 md:gap-4">
        <span className="label text-muted">[{index}]</span>
        <h2 className="display text-[clamp(1.55rem,3.4vw,2.6rem)] leading-none">
          {title}
        </h2>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        {note ? (
          <p className="label max-w-[34ch] text-muted sm:text-right">
            {note}
          </p>
        ) : null}
        {children}
      </div>
    </div>
  );
}
