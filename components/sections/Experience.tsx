"use client";

import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Sovricsoft",
    period: "1 Year · Present",
    place: "Lahore, PK · Remote",
    description:
      "Working remotely in full-stack development, building and maintaining modern web applications with the MERN stack.",
    logoImage: "/sovricsoft-icon.svg",
    skills: [
      ["MongoDB", "/mongodb.svg"],
      ["Express.js", "/javascript.svg"],
      ["React.js", "/react.svg"],
      ["Next.js", "/nextdotjs.svg"],
      ["Node.js", "/nodejs.svg"],
      ["JavaScript", "/javascript.svg"],
    ],
  },
];

export default function Experience() {
  const [headingProgress, setHeadingProgress] = useState(0);
  const headingRef = useRef<HTMLDivElement>(null);

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

  const clearCardGlow = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--mouse-x", "-300px");
    event.currentTarget.style.setProperty("--mouse-y", "-300px");
  };

  useEffect(() => {
    const updateHeadingProgress = () => {
      if (!headingRef.current) return;
      const bounds = headingRef.current.getBoundingClientRect();
      const start = window.innerHeight * 0.95;
      const end = window.innerHeight * 0.1;
      setHeadingProgress(
        Math.max(0, Math.min(1, (start - bounds.top) / (start - end))),
      );
    };
    updateHeadingProgress();
    window.addEventListener("scroll", updateHeadingProgress, { passive: true });
    window.addEventListener("resize", updateHeadingProgress);
    return () => {
      window.removeEventListener("scroll", updateHeadingProgress);
      window.removeEventListener("resize", updateHeadingProgress);
    };
  }, []);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative z-10 w-full px-4 pb-20 pt-16 sm:px-8 md:pt-24"
    >
      <div className="mx-auto max-w-5xl">
        <div
          ref={headingRef}
          className="relative mb-6 flex w-full justify-center overflow-visible py-4 text-center md:mb-10"
        >
          <h2
            id="experience-heading"
            className="relative -m-6 inline-flex items-center justify-center p-6 font-display text-[clamp(2rem,7.5vw,4.5rem)] font-black uppercase leading-none tracking-wider md:text-[clamp(4rem,7vw,7.5rem)] md:tracking-widest"
          >
            <span
              className="section-outline-title whitespace-nowrap"
              aria-hidden="true"
            >
              Experience
            </span>
            <span
              className="section-outline-title-active absolute inset-0 flex items-center justify-center whitespace-nowrap"
              aria-hidden="true"
              style={{
                clipPath: `inset(0 ${35 - headingProgress * 35}% 0 ${headingProgress * 35}%)`,
                maskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)`,
              }}
            >
              Experience
            </span>
            <span className="sr-only">Experience</span>
          </h2>
        </div>
        <div className="relative pl-7 sm:pl-14">
          <div className="experience-timeline-line absolute bottom-7 left-[7px] top-1 w-px bg-white/[0.14] sm:left-[35px]" />
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.company} className="relative">
                <span
                  className="absolute -left-[27px] top-5 z-20 h-3 w-3 rounded-full border-2 border-[#0A0A0A] bg-white sm:-left-[27px]"
                  aria-hidden="true"
                />
                <article
                  onMouseMove={handleCardMove}
                  onMouseLeave={clearCardGlow}
                  className="experience-card pointer-glow-card relative overflow-hidden rounded-2xl border border-white/[0.13] bg-[#0A0A0A]/90 p-4 backdrop-blur-md sm:p-5"
                >
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                          <Image
                            src={experience.logoImage}
                            alt={`${experience.company} logo`}
                            fill
                            sizes="48px"
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-display text-lg font-semibold leading-tight text-white sm:text-xl">
                            {experience.role}
                          </h3>
                          <p className="mt-1 font-sans text-base font-semibold text-zinc-300">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-1 text-left text-sm text-zinc-400 sm:text-right">
                        <p className="flex items-center gap-1.5 sm:justify-end">
                          <CalendarDays size={14} className="shrink-0" />
                          {experience.period}
                        </p>
                        <p className="flex items-center gap-1.5 sm:justify-end">
                          <MapPin size={14} className="shrink-0" />
                          {experience.place}
                        </p>
                      </div>
                    </div>
                    <p className="font-sans text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                      {experience.description}
                    </p>
                    <div className="experience-skills flex flex-wrap gap-2">
                      {experience.skills.map(([skill, icon]) => (
                        <span
                          key={skill}
                          className="experience-skill group relative inline-flex items-center gap-1.5 rounded-full border border-white/[0.14] bg-white/[0.035] px-3 py-1 font-sans text-[11px] font-semibold text-zinc-300"
                          title={skill}
                        >
                          <span
                            aria-hidden="true"
                            className="experience-skill-tooltip pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-30 -translate-x-1/2 translate-y-1 rounded-lg border border-[#3f3f46] bg-[#18181b] px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
                          >
                            {skill}
                            <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-[#3f3f46] bg-[#18181b]" />
                          </span>
                          <span className="experience-skill-icon relative h-4 w-4 shrink-0">
                            <Image
                              src={icon}
                              alt=""
                              fill
                              sizes="18px"
                              className="object-contain"
                            />
                          </span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
