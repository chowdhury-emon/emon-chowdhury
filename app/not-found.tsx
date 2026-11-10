import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import Magnet from "@/components/reactbits/Magnet";

export default function NotFound() {
  return (
    <section className="pt-16">
      <div className="shell flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20">
        <p className="label text-muted">[404]</p>
        <h1 className="display mt-4 text-[clamp(3rem,12vw,10rem)] leading-[0.85]">
          Page not found.
        </h1>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
          That route does not exist. The selected work is still here.
        </p>
        <Magnet
          wrapperClassName="mt-8 inline-block"
          padding={56}
          magnetStrength={9}
          maxOffset={12}
          spring={{ stiffness: 220, damping: 18, mass: 0.8 }}
        >
          <Link
            href="/"
            className="label inline-flex w-fit items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-paper"
          >
            Back home
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Magnet>
      </div>
    </section>
  );
}
