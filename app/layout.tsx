import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.talharashid.cv"),
  title: {
    default: "Talha Rashid | Full-Stack Next.js & MERN Developer, Lahore",
    template: "%s | Talha Rashid",
  },
  description:
    "Talha Rashid is a full-stack developer in Lahore, Pakistan, building fast, scalable web apps with Next.js, React, Node.js, MongoDB and AI integrations.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Talha Rashid", url: "https://www.talharashid.cv" }],
  icons: {
    icon: "/Logo.svg",
    shortcut: "/Logo.svg",
    apple: "/Logo.svg",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Talha Rashid",
    title: "Talha Rashid | Full-Stack Developer in Lahore",
    description:
      "Full-stack developer building Next.js, MERN and AI-powered web applications.",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Talha Rashid — Full-Stack Developer, Lahore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@talharashid3981",
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${poppins.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <div className="site-background" aria-hidden="true" />
        <Navbar />
        <div className="relative z-10">{children}</div>
        <Footer />
        </body>
    </html>
  );
}
