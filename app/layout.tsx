"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ClerkThemeProvider from "@/components/ClerkThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { usePathname } from "next/navigation";

const HIDDEN_ROUTES = [
  "/sign-in",
  "/sign-up",
  "/dashboard",
  "/dashboard/addexpense",
  "/dashboard/aianalysis",
  "/dashboard/transactions",
  "/dashboard/main",
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const shouldHideNavbar = HIDDEN_ROUTES.includes(pathname);

  return (
    <ThemeProvider>
      <ClerkThemeProvider>
        <html lang="en">
          <body>
            {!shouldHideNavbar && <Navbar />}
            {children}
          </body>
        </html>
      </ClerkThemeProvider>
    </ThemeProvider>
  );
}
