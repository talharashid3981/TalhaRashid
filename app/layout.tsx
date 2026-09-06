import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  title: "Talha Rashid | Full-Stack Software Engineer",
  description: "Portfolio of Talha Rashid — Full-Stack Software Engineer specializing in Agentic AI, automation and high-impact applications.",
  icons: {
    icon: "/Logo.svg",
    shortcut: "/Logo.svg",
    apple: "/Logo.svg",
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
