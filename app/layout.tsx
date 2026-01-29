import type { Metadata } from "next";
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
  title: "LunarcatOwO.space",
  description: "Just doing things.",
  authors: [{ name: "LunarcatOwO" }],
  keywords: ["developer", "programming", "portfolio"],
  openGraph: {
    title: "LunarcatOwO.space",
    description: "Just doing things.",
    url: "https://lunarcatowo.space",
    siteName: "LunarcatOwO.space",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "LunarcatOwO - Just doing things.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LunarcatOwO",
    creator: "@LunarcatOwO",
    title: "LunarcatOwO.space",
    description: "Just doing things.",
    images: ["/api/og"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
