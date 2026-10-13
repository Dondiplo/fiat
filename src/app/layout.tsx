import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CookieBanner } from "@/components/CookieBanner";
import { site } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: `${site.name}: ${site.tagline}`, template: `%s | ${site.shortName}` },
  description: "Fiat Justitia Attorneys is a full-service Nigerian law firm advising businesses, institutions, families and individuals from Lagos and Abuja.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

// Hide [data-reveal] content only when motion is allowed. If the app never
// hydrates (ScrollReveal adds "reveal-live"), show everything after 4s.
const revealBootstrap = `(function(){try{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;var d=document.documentElement;d.classList.add("reveal-ready");setTimeout(function(){if(!d.classList.contains("reveal-live"))d.classList.remove("reveal-ready")},4000)}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The inline script adds a class before first paint, hence suppressHydrationWarning.
    <html lang="en-NG" className={manrope.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollReveal />
        <CookieBanner />
      </body>
    </html>
  );
}
