import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Logo from "@/public/Logo.png";

const socialLinks = [
  { label: "GitHub", href: "#", icon: "⌘" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "X", href: "#", icon: "X" },
  { label: "Facebook", href: "#", icon: "f" },
  { label: "Instagram", href: "#", icon: "◎" },
  { label: "TikTok", href: "#", icon: "♪" },
  { label: "YouTube", href: "#", icon: "▶" },
  { label: "Email", href: "mailto:hello@example.com", icon: "@" },
  { label: "Call", href: "tel:+923000000000", icon: "⌕" },
  { label: "Location", href: "#", icon: "•" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.12] px-4 sm:px-8">
      <div className="mx-auto max-w-7xl px-8 ">
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <Link
            href="#home"
            className="flex items-center gap-3"
            aria-label="Back to home"
          >
            <Image
              src={Logo}
              alt=""
              width={42}
              height={42}
              className="h-11 w-11 object-contain"
            />
            <span>
              <span className="block font-display text-lg font-bold text-white">
                Talha Rashid
              </span>
              <span className="block text-xs text-zinc-400">
                Software Engineer &amp; Agentic AI Specialist
              </span>
            </span>
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="#appointment"
              className="footer-whatsapp-link inline-flex h-9 items-center gap-2 rounded-lg border border-white/[0.16] px-3 text-xs font-semibold text-zinc-300 transition hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-white"
            >
              <MessageCircle size={15} className="text-[#25D366]" />
              WhatsApp
            </a>
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                className="footer-social-link"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/[0.1] py-6 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© 2026 Talha Rashid. All rights reserved.</span>
            
           
          </div>
        </div>
      </div>
    </footer>
  );
}
