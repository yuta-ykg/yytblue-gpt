import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "yytblue",
  description: "日々の発見や好きなことを共有するマイクロブログ。",
  manifest: "/manifest.webmanifest",
  applicationName: "yytblue",
  appleWebApp: { capable: true, title: "yytblue", statusBarStyle: "default" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icons/icon-192.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
