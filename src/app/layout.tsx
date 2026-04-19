import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OJF Labs",
    template: "%s — OJF Labs",
  },
  description:
    "An independent studio by Oliver J. Fitzgerald. Small, focused apps — and the privacy policy for each one.",
  openGraph: {
    title: "OJF Labs",
    description:
      "An independent studio by Oliver J. Fitzgerald. Small, focused apps — and the privacy policy for each one.",
    siteName: "OJF Labs",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
