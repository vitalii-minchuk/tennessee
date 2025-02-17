import type { Metadata } from "next";
import { Bokor, Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { cn } from "~/lib/utils";
import { Header } from "~/components/layouts/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bokor = Bokor({
  variable: "--font-bokor",
  weight: '400',
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tennessee",
  description: "Tennessee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(`${geistSans.variable} ${bokor.variable} ${geistMono.variable} antialiased`)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
