import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Secure Guard Security Services || Apartment Security",
  description:
    "Professional apartment security officers, gate monitoring, and patrol services designed to protect residents, parking areas, and daily community operations.",
  keywords: [
    "apartment security",
    "residential security",
    "gate monitoring",
    "patrol services",
    "secure guard",
    "community safety",
    "property management security",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Favicon.png",
  },
  openGraph: {
    title: "Secure Guard Security Services || Apartment Security",
    description:
      "Professional apartment security officers, gate monitoring, and patrol services designed to protect residents, parking areas, and daily community operations.",
    type: "website",
  },
};

import { ScrollToTop } from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
