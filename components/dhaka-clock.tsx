"use client";

import { useEffect, useState } from "react";

export function DhakaClock({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());

    const frame = window.requestAnimationFrame(() => setTime(format()));
    const id = window.setInterval(() => setTime(format()), 1000);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(id);
    };
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time ?? "--:--:--"} DHAKA
    </span>
  );
}
