import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LINGUORA — Хэл сурна гэдэг шинэ ертөнц нээх",
  description: "Монголд зориулсан орчин үеийн, ухаалаг хэлний сургалтын төв.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}