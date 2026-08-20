import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ajit.dev"),
  title: {
    default: "Ajit Angad Zori | Full Stack Developer",
    template: "%s | Ajit Angad Zori",
  },
  description:
    "Ajit Angad Zori — Full Stack Developer building modern, scalable web applications with React, Next.js, Node.js, Java, Python and AI technologies.",
  keywords: [
    "Ajit Angad Zori",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "AI Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ajit Angad Zori" }],
  openGraph: {
    title: "Ajit Angad Zori | Full Stack Developer",
    description:
      "Full Stack Developer building modern, scalable web applications with React, Next.js, Node.js, and AI.",
    type: "website",
    siteName: "Ajit Angad Zori",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Angad Zori | Full Stack Developer",
    description:
      "Full Stack Developer building modern, scalable web applications.",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
