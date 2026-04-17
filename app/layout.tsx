import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Développeur Web & Mobile",
  description: "Portfolio 2026 - React • Next.js • Flutter • React Native • IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}
