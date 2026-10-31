import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import Logo from "@/public/Logo.png";

const socialLinks = [
  { label: "GitHub", tooltip: "@talharashid3981", href: "https://github.com/talharashid3981", icon: "github" },
  { label: "LinkedIn", tooltip: "@talharashid3981", href: "https://www.linkedin.com/in/talharashid3981/", icon: "linkedin" },
  { label: "X", tooltip: "@talharashid3981", href: "https://x.com/talharashid3981", icon: "x" },
  { label: "Instagram", tooltip: "@talharashid3981", href: "https://www.instagram.com/talharashid3981", icon: "instagram" },
  { label: "TikTok", tooltip: "@talharashid3981", href: "https://www.tiktok.com/@talharashid3981", icon: "tiktok" },
  { label: "Facebook", tooltip: "Talha Rashid", href: "https://www.facebook.com/profile.php?id=100085214254285", icon: "facebook" },
  { label: "Call", tooltip: "03266095310", href: "tel:+923266095310", icon: Phone },
  { label: "Location", tooltip: "Lahore, Pakistan", href: "https://www.google.com/maps/search/?api=1&query=Lahore%2C%20Pakistan", icon: MapPin },
];

function BrandIcon({ name }: { name: "github" | "facebook" | "instagram" | "linkedin" | "x" | "tiktok" }) {
  if (name === "github") return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" /></svg>;
  if (name === "facebook") return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.6v8h2.9Z" /></svg>;
  if (name === "instagram") return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V8.99H3.56v11.46Z" /></svg>;
  if (name === "tiktok") return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.6.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.9.06-3.79.07-5.69.01-4.29-.01-8.57.02-12.86Z" /></svg>;
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.683l7.73-8.835L1.257 2.25h6.826l4.713 6.231 5.448-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" /></svg>;
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.12] px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <Link
            href="#home"
            className="footer-brand-link flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0c0c0f]"
            aria-label="Back to home"
          >
            <Image
              src={Logo}
              alt=""
              width={42}
              height={42}
              className="h-11 w-11 shrink-0 object-contain"
            />
            <span className="min-w-0">
              <span className="block font-display text-lg font-bold text-white">Talha Rashid</span>
              <span className="block text-xs leading-relaxed text-zinc-400">
                Software Engineer &amp; Agentic AI Specialist
              </span>
            </span>
          </Link>
          <div
            role="group"
            aria-label="Social and contact links"
            className="flex flex-wrap items-center gap-2 md:justify-end"
          >
            <a href="https://wa.me/923266095310" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer-whatsapp-link inline-flex h-10 items-center gap-2 rounded-lg border px-3 text-xs font-semibold text-zinc-300 transition hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2">
              <Phone size={15} className="text-[#25D366]" /> WhatsApp
            </a>
            {socialLinks.map(({ label, tooltip, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="footer-social-link group relative">
                {typeof Icon === "string" ? <BrandIcon name={Icon as "github" | "facebook" | "instagram" | "linkedin" | "x" | "tiktok"} /> : <Icon size={16} strokeWidth={1.8} aria-hidden="true" />}
                <span aria-hidden="true" className="footer-social-tooltip pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-30 -translate-x-1/2 translate-y-1 rounded-lg border border-[#3f3f46] bg-[#18181b] px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">{tooltip}<span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-[#3f3f46] bg-[#18181b]" /></span>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-divider flex flex-col gap-4 border-t border-white/[0.1] py-6 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Talha Rashid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
