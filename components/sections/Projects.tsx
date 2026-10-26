"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, ChevronDown, ExternalLink, GitBranch } from "lucide-react";
import { useState } from "react";
import type { MouseEvent } from "react";
import { featuredProjects } from "@/lib/projects";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  "All",
  "Travel Services",
  "Visual-to-Code",
  "Generative AI",
  "AI Application",
  "Business Website",
  "E-commerce",
  "Music",
  "Entertainment",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleCardMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - bounds.top}px`,
    );
  };

  const filteredProjects =
    activeCategory === "All"
    ? featuredProjects
    : featuredProjects.filter(
          (project) => project.category === activeCategory,
        );
  const visibleProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-10 w-full min-w-0 scroll-mt-24 overflow-x-clip px-4 pb-24 pt-16 sm:px-8 md:pt-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          id="projects-heading"
          title="Projects"
          className="relative mb-6 flex w-full justify-center overflow-visible py-4 text-center md:mb-10"
        />

        <div className="space-y-6">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Project categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAllProjects(false);
                }}
                className={`project-filter min-h-10 rounded-lg border px-3 py-2 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${activeCategory === category ? "project-filter-active border-white bg-white text-black" : "border-white/[0.16] bg-white/[0.035] text-zinc-300 hover:border-white/[0.35] hover:bg-white/[0.09] hover:text-white"}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div id="project-results" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.name}
                onMouseMove={handleCardMove}
                className="project-card pointer-glow-card group relative flex min-h-[290px] flex-col overflow-visible rounded-2xl border border-[#212121] bg-[#0A0A0A] p-5 backdrop-blur-md"
              >
                <div className="relative z-10 flex min-w-0 flex-wrap items-center justify-between gap-2">
                  <span className="project-category-badge min-w-0 max-w-full rounded-full border px-2 py-0.5 text-[11px] font-semibold">
                    {project.category}
                  </span>
                  <div className="flex max-w-full shrink-0 items-center gap-1">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology.name}
                        className="project-tech-icon group/tech relative h-5.5 w-5.5 rounded border border-white/[0.14] bg-white/[0.04] p-1.5"
                      >
                        <Image
                          src={technology.icon}
                          alt={technology.name}
                          fill
                          sizes="18px"
                          className="object-contain p-0.5"
                        />
                        <span
                          aria-hidden="true"
                          className="project-tech-tooltip pointer-events-none absolute bottom-[calc(100%+9px)] left-1/2 z-40 -translate-x-1/2 translate-y-1 rounded-md border border-[#3f3f46] bg-[#18181b] px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-200 group-hover/tech:translate-y-0 group-hover/tech:opacity-100"
                        >
                          {technology.name}
                          <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-[#3f3f46] bg-[#18181b]" />
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 mt-5 flex items-center gap-2.5">
                  <span
                    className={`relative flex h-9 w-9 items-center justify-center rounded-lg  text-lg font-bold ${project.logoClass}`}
                  >
                    {project.logoImage ? (
                      <Image
                        src={project.logoImage}
                        alt={`${project.name} logo`}
                        fill
                        sizes="28px"
                        className="object-contain p-1"
                      />
                    ) : (
                      project.logo
                    )}
                  </span>
                  <h3 className="min-w-0 break-words font-display text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                </div>
                <p className="relative z-10 mt-3 line-clamp-3 font-sans text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="relative z-10 mt-auto flex flex-col gap-2 pt-5">
                  <Link
                    href={`/project/${project.slug}`}
                    className="project-case-study inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[#494949] bg-[#202020] px-3 py-2 text-xs font-semibold text-[#E5E5E5] transition hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <BookOpen size={14} /> Read Case Study
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className={`project-visit inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[#282828] bg-[#121212] px-2 py-2 text-xs font-semibold text-white transition hover:border-[#3a3a3a] hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${project.isPrivate ? "col-span-2" : ""}`}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    {!project.isPrivate && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noreferrer"
                        className="project-visit inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[#282828] bg-[#121212] px-2 py-2 text-xs font-semibold text-white transition hover:border-[#3a3a3a] hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <GitBranch size={14} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="rounded-xl border border-white/[0.12] p-8 text-center text-sm text-zinc-400">
              No projects in this category yet.
            </p>
          )}
          {filteredProjects.length > 6 && (
            <div className="flex justify-center pt-1">
              <button
                type="button"
                aria-expanded={showAllProjects}
                aria-controls="project-results"
                onClick={() => setShowAllProjects((current) => !current)}
                className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.03] px-6 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-purple-300/50 hover:bg-purple-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span>{showAllProjects ? "Show less" : "See more"}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform group-hover:translate-y-0.5 ${showAllProjects ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
