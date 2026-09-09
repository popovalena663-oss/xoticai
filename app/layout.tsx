import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XoticAI Personal",
  description: "Личная студия XoticAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
