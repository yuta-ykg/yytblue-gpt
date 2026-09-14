import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue",
  description: "日々の発見や好きなことを共有するマイクロブログ。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
