// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Amiri_Quran } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const amiri = Amiri_Quran({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "Quran Verse",
  description:
    "A simple, professional one-pager that shows a Quran verse in Arabic & English with a short context.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* no-flicker dark mode init */}
        <Script id="init-theme" strategy="beforeInteractive">
          {`try {
            const ls = localStorage.getItem("theme");
            const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            const theme = ls || (prefersDark ? "dark" : "light");
            if (theme === "dark") document.documentElement.classList.add("dark");
          } catch {}`
          }
        </Script>
      </head>
      <body className={`${poppins.variable} ${amiri.variable} min-h-screen bg-[#F8FAFC] text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
