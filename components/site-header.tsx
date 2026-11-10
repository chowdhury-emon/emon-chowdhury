"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import Magnet from "./reactbits/Magnet";
import {
  ArrowUpRight,
  Close,
  Download,
  GitHub,
  LinkedIn,
  MenuIcon,
} from "./icons";

const NAV = [
  { id: "about", label: "About", index: "01" },
  { id: "work", label: "Work", index: "02" },
  { id: "stack", label: "Stack", index: "03" },
  { id: "practice", label: "Practice", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = ["top", ...NAV.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setActive(entry.target.id === "top" ? null : entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!open) return;

    const menu = menuRef.current;
    const trigger = menuButtonRef.current;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menu) return;

      const items = menu.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`);
  const activeSection = isHome ? active : null;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="relative border-b border-line bg-paper/75 backdrop-blur-xl supports-backdrop:bg-paper/60">
          <div className="shell flex h-16 items-center justify-between gap-4">
            <Link
              href="/"
              className="group flex items-baseline gap-2.5"
              aria-label="Emon Chowdhury — home"
            >
              <span className="display text-[1.7rem] leading-none tracking-[-0.02em]">
                EC<span className="align-super text-[0.5rem]">®</span>
              </span>
              <span className="label hidden text-muted transition-colors group-hover:text-ink sm:block">
                Emon Chowdhury
              </span>
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-6 md:flex"
            >
              {NAV.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={hrefFor(item.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`label relative flex items-center gap-2 py-2 transition-colors ${
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1 w-1 rounded-full bg-ink transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="label hidden items-center gap-2 text-muted lg:flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/30 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
                </span>
                {SITE.availability}
              </span>

              <span className="hidden sm:block">
                <Magnet
                  padding={64}
                  magnetStrength={10}
                  maxOffset={14}
                  spring={{ stiffness: 220, damping: 18, mass: 0.8 }}
                >
                  <a
                    href={SITE.resumePath}
                    download
                    className="label group flex cursor-pointer items-center gap-2 rounded-full border border-line px-4 py-2.5 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    Resume
                    <Download className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                  </a>
                </Magnet>
              </span>

              <span className="md:hidden">
                <Magnet
                  padding={48}
                  magnetStrength={8}
                  maxOffset={8}
                  spring={{ stiffness: 240, damping: 18, mass: 0.7 }}
                >
                  <button
                    type="button"
                    ref={menuButtonRef}
                    onClick={() => setOpen(true)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    className="label flex items-center gap-2 rounded-full border border-line px-4 py-2.5 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    Menu
                    <MenuIcon className="h-4 w-4" />
                  </button>
                </Magnet>
              </span>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-px h-px origin-left bg-ink/70"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className="menu-in fixed inset-0 z-50 flex flex-col bg-paper md:hidden"
        >
          <div className="shell flex h-16 shrink-0 items-center justify-between border-b border-line">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="display text-[1.7rem] leading-none"
              aria-label="Emon Chowdhury — home"
            >
              EC<span className="align-super text-[0.5rem]">®</span>
            </Link>
            <Magnet
              padding={48}
              magnetStrength={8}
              maxOffset={8}
              spring={{ stiffness: 240, damping: 18, mass: 0.7 }}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpen(false)}
                className="label flex items-center gap-2 rounded-full border border-line px-4 py-2.5"
              >
                Close
                <Close className="h-4 w-4" />
              </button>
            </Magnet>
          </div>

          <nav
            aria-label="Mobile"
            className="shell flex flex-1 flex-col justify-center"
          >
            {NAV.map((item) => (
              <a
                key={item.id}
                href={hrefFor(item.id)}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-line py-4"
              >
                <span className="display text-[clamp(2.4rem,11vw,4rem)] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  {item.label}
                </span>
                <span className="label text-muted">[{item.index}]</span>
              </a>
            ))}
          </nav>

          <div className="shell grid shrink-0 gap-4 border-t border-line py-6 sm:grid-cols-2">
            <a
              href={`mailto:${SITE.email}`}
              className="label flex items-center gap-2"
            >
              {SITE.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="flex gap-5 sm:justify-end">
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="label flex items-center gap-2 text-muted"
              >
                <GitHub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="label flex items-center gap-2 text-muted"
              >
                <LinkedIn className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
