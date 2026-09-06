"use client";

import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

const experiences = [
  {
    role: "Founder & CEO",
    company: "DigiHomeo",
    period: "Oct 2025 – Present",
    place: "Faisalabad, PK · On-site",
    description: "Pioneering clinical decision support in homeopathy by building custom medical LLMs and agentic workflows.",
    logo: "D",
    logoClass: "text-[#55b94c]",
    skills: [["Flutter", "/react.svg"], ["Dart", "/javascript.svg"], ["Firebase", "/googlecloud.svg"], ["Google Cloud", "/googlecloud.svg"], ["Google DeepMind", "/openai.svg"], ["MedGemma", "/openai.svg"]],
  },
  {
    role: "Chief Technology Officer",
    company: "SupportGrove",
    period: "Jan 2026 – Present",
    place: "Hartford, Connecticut, US · Remote",
    description: "Support Through Shared Experiences on trauma, addiction, mental health, and more...",
    logo: "S",
    logoClass: "text-[#6ec85a]",
    skills: [["Flutter", "/react.svg"], ["Dart", "/javascript.svg"], ["Firebase", "/googlecloud.svg"], ["HTML", "/html5.svg"], ["CSS", "/css3.svg"], ["JavaScript", "/javascript.svg"]],
  },
  {
    role: "Chief Technology Officer",
    company: "Uear Hearing Technology",
    period: "Dec 2025 – Present",
    place: "Karachi, PK · Remote",
    description: "Architected robust enterprise IT infrastructure, custom CRM platforms, and official web applications.",
    logo: "U",
    logoClass: "text-[#f0a62b]",
    skills: [["HTML", "/html5.svg"], ["CSS", "/css3.svg"], ["JavaScript", "/javascript.svg"], ["AppSheet", "/googlecloud.svg"]],
  },
];

export default function Experience() {
  const [headingProgress, setHeadingProgress] = useState(0);
  const headingRef = useRef<HTMLDivElement>(null);

  const handleCardMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
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
      const progress = Math.max(0, Math.min(1, (start - bounds.top) / (start - end)));
      setHeadingProgress(progress);
    };
    updateHeadingProgress();
    window.addEventListener("scroll", updateHeadingProgress, { passive: true });
    window.addEventListener("resize", updateHeadingProgress);
    return () => { window.removeEventListener("scroll", updateHeadingProgress); window.removeEventListener("resize", updateHeadingProgress); };
  }, []);

  return (
    <section id="experience" className="relative z-10 w-full px-4 pb-20 pt-16 sm:px-8 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <div ref={headingRef} className="relative mb-6 flex w-full justify-center overflow-visible py-4 text-center md:mb-10">
          <div className="relative inline-flex items-center justify-center p-6 -m-6 font-display text-[clamp(2rem,7.5vw,4.5rem)] font-black uppercase leading-none tracking-wider md:text-[clamp(4rem,7vw,7.5rem)] md:tracking-widest">
            <span className="section-outline-title whitespace-nowrap" aria-hidden="true">Experience</span>
            <span className="section-outline-title-active absolute inset-0 flex items-center justify-center whitespace-nowrap" aria-hidden="true" style={{ clipPath: `inset(0 ${35 - headingProgress * 35}% 0 ${headingProgress * 35}%)`, maskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)`, WebkitMaskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)` }}>Experience</span>
          </div>
        </div>
        <div className="relative pl-7 sm:pl-14">
          <div className="experience-timeline-line absolute bottom-7 left-[7px] top-1 w-px bg-white/[0.14] sm:left-[35px]" />
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.company} className="relative">
                <span className="absolute -left-[27px] top-5 z-20 h-3 w-3 rounded-full border-2 border-[#0A0A0A] bg-white sm:-left-[27px]" aria-hidden="true" />
                <article onMouseMove={handleCardMove} onMouseLeave={clearCardGlow} className="experience-card pointer-glow-card relative overflow-hidden rounded-2xl border border-white/[0.13] bg-[#0A0A0A]/90 p-4 backdrop-blur-md sm:p-5">
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-2xl font-display font-bold ${experience.logoClass}`}>{experience.logo}</div>
                        <div><h2 className="font-display text-lg font-semibold leading-tight text-white sm:text-xl">{experience.role}</h2><p className="mt-1 font-sans text-base font-semibold text-zinc-300">{experience.company}</p></div>
                      </div>
                      <div className="space-y-1 text-left text-sm text-zinc-400 sm:text-right"><p className="flex items-center gap-1.5 sm:justify-end"><CalendarDays size={14} />{experience.period}</p><p className="flex items-center gap-1.5 sm:justify-end"><MapPin size={14} />{experience.place}</p></div>
                    </div>
                    <p className="font-sans text-sm leading-relaxed text-zinc-400 sm:text-[15px]">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">{experience.skills.map(([skill, icon]) => <span key={skill} className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.14] bg-white/[0.035] px-3 py-1 font-sans text-[11px] font-semibold text-zinc-300"><span className="experience-skill-icon relative h-3.5 w-3.5 shrink-0 rounded bg-white p-0.5"><Image src={icon} alt="" fill sizes="14px" className="object-contain" /></span>{skill}</span>)}</div>
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
