import type { Metadata } from "next";
import "./globals.css";
import WebMCP from "./webmcp";

export const metadata: Metadata = {
  title: "t. — ミニSNS",
  description: "投稿とフォローでつながるシンプルなSNS。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}<WebMCP/></body>
    </html>
  );
}
