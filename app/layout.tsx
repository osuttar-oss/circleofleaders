import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Circle of Leaders | Finance Leadership, Together",
  description:
    "A curated executive finance leadership platform for CFOs and senior finance leaders shaping the future of enterprise finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}