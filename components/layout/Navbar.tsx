"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/public/Logo.png";
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CircleHelp,
  Code2,
  GraduationCap,
  House,
  Menu,
  Moon,
  Newspaper,
  SlidersHorizontal,
  Sun,
  Trophy,
  Wrench,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", id: "home", href: "#home", icon: House },
  {
    label: "Experience",
    id: "experience",
    href: "#experience",
    icon: BriefcaseBusiness,
  },
  { label: "Projects", id: "projects", href: "#projects", icon: Code2 },
  {
    label: "Education",
    id: "education",
    href: "#education",
    icon: GraduationCap,
  },
  {
    label: "Certifications",
    id: "certifications",
    href: "#certifications",
    icon: Award,
  },
  { label: "Honours", id: "honours", href: "#honours", icon: Trophy },
  { label: "Skills", id: "skills", href: "#skills", icon: Wrench },
  {
    label: "Services",
    id: "services",
    href: "#services",
    icon: SlidersHorizontal,
  },
  { label: "FAQ", id: "faq", href: "#faq", icon: CircleHelp },
  { label: "Blog", id: "blog", href: "#blog", icon: Newspaper },
  { label: "Contact", id: "contact", href: "#appointment", icon: CalendarDays },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  const ThemeIcon = theme === "dark" ? Sun : Moon;

  useEffect(() => {
    const sections = navItems
      .map((item) => {
        const sectionId = item.id === "contact" ? "appointment" : item.id;
        return { id: sectionId, element: document.getElementById(sectionId) };
      })
      .filter((item): item is { id: string; element: HTMLElement } => item.element !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id === "appointment" ? "contact" : visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    sections.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const selectedId = activeId;

  const selectItem = (id: string) => {
    setActiveId(id);
    setMobileOpen(false);
  };

  const navLinks = (mobile = false) => navItems.map((item) => {
    const Icon = item.icon;
    const isActive = selectedId === item.id;
    const desktopClasses = isActive
      ? "w-auto gap-2 border border-[#3A1D55] bg-[#1C1128] px-3 text-[#C27AFF] shadow-[inset_0_0_18px_rgba(194,122,255,0.16),0_0_22px_rgba(116,45,255,0.2)]"
      : "w-9 border border-transparent hover:w-auto hover:gap-2 hover:border-[#474747] hover:bg-[#262626] hover:px-3 hover:text-[#E5E5E5] hover:shadow-[inset_0_0_14px_rgba(255,255,255,0.06),0_0_14px_rgba(255,255,255,0.04)] sm:w-10";
    const mobileClasses = isActive
      ? "w-full justify-start gap-3 border border-[#3A1D55] bg-[#1C1128] px-4 text-[15px] font-semibold text-[#C27AFF] shadow-[inset_0_0_22px_rgba(194,122,255,0.16),0_0_18px_rgba(116,45,255,0.16)]"
      : "w-full justify-start gap-3 border border-transparent px-4 text-[15px] font-semibold hover:border-[#474747] hover:bg-[#262626] hover:text-[#E5E5E5] hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.06),0_0_12px_rgba(255,255,255,0.03)]";
    const itemClasses = mobile
      ? mobileClasses
      : `overflow-hidden ${desktopClasses}`;

    return (
      <Link
        key={item.id}
        href={item.href}
        title={item.label}
        aria-label={item.label}
        aria-current={isActive ? "page" : undefined}
        onClick={() => selectItem(item.id)}
        className={`group relative flex h-9 shrink-0 items-center justify-center rounded-full text-[#A1A1A1] transition-[width,padding,color,background-color,box-shadow,border-color] duration-300 ease-out hover:text-[#E5E5E5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6]/70 ${itemClasses}`}
      >
        <Icon size={mobile ? 18 : 17} strokeWidth={1.8} className="shrink-0 transition-transform duration-300 group-hover:scale-105" />
        <span className={`whitespace-nowrap ${mobile ? "" : `text-[11px] font-semibold tracking-[-0.01em] transition-[max-width,opacity] duration-300 ${isActive ? "max-w-24 opacity-100" : "max-w-0 opacity-0 group-hover:max-w-24 group-hover:opacity-100"}`}`}>
          {item.label}
        </span>
      </Link>
    );
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-5">
      <div className="relative mx-auto flex h-[64px] max-w-[1000px] items-center rounded-full border border-[#2D2C30] bg-[#0D0B10] px-3 shadow-[0_18px_55px_rgba(101,45,220,0.25),0_2px_14px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:h-[60px] sm:px-5">
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6]/70 sm:hidden"
        >
          {mobileOpen ? <X size={21} strokeWidth={1.7} /> : <Menu size={21} strokeWidth={1.7} />}
        </button>

        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 max-sm:absolute max-sm:left-1/2 max-sm:-translate-x-1/2"
          aria-label="Talha Rashid home"
        >
          <Image
            src={Logo}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="hidden whitespace-normal text-[16px] font-display font-bold tracking-[0.05em] text-white sm:block sm:text-[18px]">
            Talha Rashid
          </span>
        </Link>

        <button
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={toggleTheme}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-[#A1A1A1] transition-colors hover:bg-[#262626] hover:text-[#C27AFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6]/70 sm:hidden"
        >
          <ThemeIcon size={18} strokeWidth={1.8} />
        </button>


        <nav
          className="ml-auto hidden min-w-0 items-center justify-end gap-0.5 sm:flex sm:gap-1"
          aria-label="Primary navigation"
        >
          {navLinks()}

          <button
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={toggleTheme}
            className="ml-0.5 flex h-10 w-9 shrink-0 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-white/[0.07] hover:text-[#b98cff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6]/70 sm:w-10"
          >
            <ThemeIcon size={17} strokeWidth={1.8} />
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <button aria-label="Close navigation overlay" onClick={() => setMobileOpen(false)} className="fixed inset-0 top-0 bg-black/65 backdrop-blur-[2px] sm:hidden" />
      )}

      <aside className={`fixed bottom-0 left-0 top-0 z-[60] flex w-[min(383px,calc(100vw-32px))] flex-col border-r border-white/[0.12] bg-[#0a0a0b] shadow-[20px_0_70px_rgba(95,35,190,0.2)] transition-transform duration-300 sm:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`} aria-hidden={!mobileOpen}>
        <div className="flex h-[86px] shrink-0 items-center justify-between border-b border-white/[0.1] px-5">
          <div>
            <p className="font-display text-[14px] font-bold tracking-[-0.03em] text-white">Talha Rashid</p>
            <p className="text-[12px] text-zinc-400">Software Engineer</p>
          </div>
          <button type="button" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} onClick={toggleTheme} className="flex h-9 w-9 items-center justify-center rounded-full text-[#9b7cff] hover:bg-white/[0.07]">
            <ThemeIcon size={18} strokeWidth={1.8} />
          </button>
        </div>
        <nav className="min-h-0 flex-1 space-y-2 overflow-y-auto px-3 py-5" aria-label="Mobile navigation">
          {navLinks(true)}
        </nav>
        <div className="shrink-0 space-y-3 border-t border-white/[0.1] p-4">
          <button type="button" className="h-11 w-full rounded-full border border-white/[0.16] text-sm font-semibold text-white transition hover:border-white/[0.28] hover:bg-white/[0.06]">Download Profile</button>
          <button type="button" className="h-11 w-full rounded-full bg-white text-sm font-medium text-[#16151a] transition hover:bg-zinc-200">Book Appointment</button>
        </div>
      </aside>
    </header>
  );
}
