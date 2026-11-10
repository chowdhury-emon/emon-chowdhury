import type { Metadata, Viewport } from "next";
import { Anton, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = "Emon Chowdhury — Frontend Developer";
const description =
  "Frontend developer in Bangladesh building considered interfaces with React, Next.js and TypeScript. Expanding into full-stack with Node, Express and MongoDB.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s — Emon Chowdhury",
  },
  description,
  applicationName: "Emon Chowdhury",
  authors: [{ name: "Emon Chowdhury" }],
  creator: "Emon Chowdhury",
  keywords: [
    "Emon Chowdhury",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Bangladesh",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Emon Chowdhury",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#e9e7e2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-svh bg-paper text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
