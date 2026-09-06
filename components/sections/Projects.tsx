"use client";

import Image from "next/image";
import { BookOpen, ChevronDown, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

type Technology = { name: string; icon: string };
type Project = {
  name: string;
  category: string;
  description: string;
  logo: string;
  logoClass: string;
  technologies: Technology[];
  website: string;
};

const categories = [
  "All", "Healthcare", "Entertainment", "Marketplace", "Education", "Non-Profit",
  "Government", "Logistics", "E-commerce", "Lifestyle", "Marketing", "Developer Tools",
];

const projects: Project[] = [
  {
    name: "DigiHomeo",
    category: "Healthcare",
    description: "AI-powered clinical decision support for doctors, assisting in case analysis and medical insights.",
    logo: "✦",
    logoClass: "text-[#55b94c]",
    technologies: [
      { name: "Flutter", icon: "/react.svg" }, { name: "Firebase", icon: "/googlecloud.svg" },
      { name: "Google Cloud", icon: "/googlecloud.svg" }, { name: "AI", icon: "/openai.svg" },
    ],
    website: "#projects",
  },
  {
    name: "Pediatric Calculator",
    category: "Healthcare",
    description: "Pediatric tool providing quick, reliable medical estimates and reference support for providers.",
    logo: "⌁",
    logoClass: "text-[#c27aff]",
    technologies: [
      { name: "HTML5", icon: "/html5.svg" }, { name: "CSS3", icon: "/css3.svg" },
      { name: "JavaScript", icon: "/javascript.svg" }, { name: "React", icon: "/react.svg" },
    ],
    website: "#projects",
  },
  {
    name: "IPTV",
    category: "Entertainment",
    description: "Modern IPTV PWA for live news, sports, cinema, and international broadcasts with an HLS player.",
    logo: "▣",
    logoClass: "text-[#c27aff]",
    technologies: [
      { name: "Next.js", icon: "/nextdotjs.svg" }, { name: "React", icon: "/react.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
    ],
    website: "#projects",
  },
  {
    name: "OpenListings",
    category: "Marketplace",
    description: "Community marketplace for products, services, and local opportunities with secure features.",
    logo: "⌂",
    logoClass: "text-[#5fc7ff]",
    technologies: [
      { name: "Next.js", icon: "/nextdotjs.svg" }, { name: "React", icon: "/react.svg" },
      { name: "Node.js", icon: "/nodejs.svg" }, { name: "Google Cloud", icon: "/googlecloud.svg" },
    ],
    website: "#projects",
  },
  {
    name: "MRC Digital CRM",
    category: "Education",
    description: "Global CRM and web portal for study abroad consulting, powering streamlined operations.",
    logo: "M",
    logoClass: "text-[#c27aff]",
    technologies: [
      { name: "Flutter", icon: "/react.svg" }, { name: "Dart", icon: "/javascript.svg" },
      { name: "Firebase", icon: "/googlecloud.svg" }, { name: "Google Cloud", icon: "/googlecloud.svg" },
    ],
    website: "#projects",
  },
  {
    name: "Community Support Platform",
    category: "Non-Profit",
    description: "A shared-experience platform supporting communities around trauma, addiction, and mental health.",
    logo: "♥",
    logoClass: "text-[#65c95a]",
    technologies: [
      { name: "HTML5", icon: "/html5.svg" }, { name: "CSS3", icon: "/css3.svg" },
      { name: "JavaScript", icon: "/javascript.svg" }, { name: "GitHub", icon: "/github.svg" },
    ],
    website: "#projects",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [headingProgress, setHeadingProgress] = useState(0);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeadingProgress = () => {
      if (!headingRef.current) return;
      const bounds = headingRef.current.getBoundingClientRect();
      const start = window.innerHeight * 0.95;
      const end = window.innerHeight * 0.1;
      setHeadingProgress(Math.max(0, Math.min(1, (start - bounds.top) / (start - end))));
    };
    updateHeadingProgress();
    window.addEventListener("scroll", updateHeadingProgress, { passive: true });
    window.addEventListener("resize", updateHeadingProgress);
    return () => {
      window.removeEventListener("scroll", updateHeadingProgress);
      window.removeEventListener("resize", updateHeadingProgress);
    };
  }, []);

  const handleCardMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
  };

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="relative z-10 w-full scroll-mt-24 px-4 pb-24 pt-16 sm:px-8 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <div ref={headingRef} className="relative mb-6 flex w-full justify-center overflow-visible py-4 text-center md:mb-10">
          <div className="relative -m-6 inline-flex items-center justify-center p-6 font-display text-[clamp(2rem,7.5vw,4.5rem)] font-black uppercase leading-none tracking-wider md:text-[clamp(4rem,7vw,7.5rem)] md:tracking-widest">
            <span className="section-outline-title whitespace-nowrap" aria-hidden="true">Projects</span>
            <span
              className="section-outline-title-active absolute inset-0 flex items-center justify-center whitespace-nowrap"
              aria-hidden="true"
              style={{
                clipPath: `inset(0 ${35 - headingProgress * 35}% 0 ${headingProgress * 35}%)`,
                maskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)`,
              }}
            >Projects</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`project-filter rounded-lg border px-2.5 py-1 text-xs font-semibold transition-all ${activeCategory === category ? "project-filter-active border-white bg-white text-black" : "border-white/[0.16] bg-white/[0.035] text-zinc-300 hover:border-white/[0.35] hover:bg-white/[0.09] hover:text-white"}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article key={project.name} onMouseMove={handleCardMove} className="project-card pointer-glow-card group relative flex min-h-[290px] flex-col overflow-hidden rounded-2xl border border-[#212121] bg-[#0A0A0A] p-5 backdrop-blur-md">
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/[0.2] px-2 py-0.5 text-[11px] font-semibold text-zinc-200">{project.category}</span>
                  <div className="flex items-center gap-1">
                    {project.technologies.map((technology) => (
                      <span key={technology.name} title={technology.name} className="project-tech-icon relative h-6 w-6 rounded border border-white/[0.14] bg-white/[0.04] p-1">
                        <Image src={technology.icon} alt={technology.name} fill sizes="24px" className="object-contain" />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 mt-5 flex items-center gap-2.5">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-lg bg-white text-lg font-bold ${project.logoClass}`}>{project.logo}</span>
                  <h2 className="font-display text-lg font-semibold text-white">{project.name}</h2>
                </div>
                <p className="relative z-10 mt-3 line-clamp-3 font-sans text-sm leading-relaxed text-zinc-400">{project.description}</p>
                <div className="relative z-10 mt-auto flex flex-col gap-2 pt-5">
                  <a href="#projects" className="project-case-study inline-flex items-center justify-center gap-2 rounded-lg border border-[#494949] bg-[#202020] px-3 py-2 text-xs font-semibold text-[#E5E5E5] transition hover:border-white hover:bg-white hover:text-black">
                    <BookOpen size={14} /> Read Case Study
                  </a>
                  <a href={project.website} className="project-visit inline-flex items-center justify-center gap-2 rounded-lg border border-[#282828] bg-[#121212] px-3 py-2 text-xs font-semibold text-white transition hover:border-[#3a3a3a] hover:bg-white/10 hover:text-white">
                    <ExternalLink size={14} /> Visit Website
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && <p className="rounded-xl border border-white/[0.12] p-8 text-center text-sm text-zinc-400">No projects in this category yet.</p>}
          <div className="flex justify-center pt-1"><button type="button" className="group inline-flex items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.03] px-6 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-purple-300/50 hover:bg-purple-500/10 hover:text-white"><span>See more</span><ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" /></button></div>
        </div>
      </div>
    </section>
  );
}
