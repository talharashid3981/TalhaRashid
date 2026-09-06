"use client";

import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

const education = [
  {
    degree: "Bachelor of Science (BS), Computer Science",
    institute: "University of the Punjab (PU)",
    period: "2022 – 2026",
    result: "CGPA: 3.31 / 4",
    logo: "/pu_uni.jpg",
  },
  {
    degree: "Intermediate (Computer Science)",
    institute: "Govt. College of Science (Wahdat Road Lahore)",
    period: "2020 – 2021",
    result: "Grade: A",
    logo: "/science_college.jpg",
  },
  {
    degree: "Matriculation (Computer Science)",
    institute: "Himayat-i-Islam Higher Secondary School",
    period: "2018 – 2019",
    result: "Grade: A+",
    logo: "/schole_logo.png",
  },
];

export default function Education() {
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

  return (
    <section id="education" className="relative z-10 w-full scroll-mt-24 px-4 pb-24 pt-16 sm:px-8 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <div ref={headingRef} className="relative mb-8 flex w-full justify-center overflow-visible py-4 text-center md:mb-12">
          <div className="relative -m-6 inline-flex items-center justify-center p-6 font-display text-[clamp(2rem,7.5vw,4.5rem)] font-black uppercase leading-none tracking-wider md:text-[clamp(4rem,7vw,7.5rem)] md:tracking-widest">
            <span className="section-outline-title whitespace-nowrap" aria-hidden="true">Education</span>
            <span className="section-outline-title-active absolute inset-0 flex items-center justify-center whitespace-nowrap" aria-hidden="true" style={{ clipPath: `inset(0 ${35 - headingProgress * 35}% 0 ${headingProgress * 35}%)`, maskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)`, WebkitMaskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)` }}>Education</span>
          </div>
        </div>
        <div className="space-y-4">
          {education.map((item) => (
            <article key={item.degree} onMouseMove={handleCardMove} className="education-card pointer-glow-card group relative overflow-hidden rounded-2xl border border-[#212121] bg-[#0A0A0A] p-4 backdrop-blur-md sm:p-5">
              <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1"><Image src={item.logo} alt={`${item.institute} logo`} fill sizes="48px" className="object-contain p-1" /></div>
                  <div className="min-w-0"><h2 className="font-display text-base font-semibold leading-snug text-white sm:text-xl">{item.degree}</h2><p className="mt-1 font-sans text-sm font-semibold text-zinc-300 sm:text-base">{item.institute}</p></div>
                </div>
                <div className="shrink-0 border-t border-white/[0.08] pt-3 text-left sm:border-t-0 sm:pt-0 sm:text-right"><p className="flex items-center gap-1.5 font-sans text-sm text-zinc-400 sm:justify-end"><CalendarDays size={14} />{item.period}</p><p className="mt-1 font-sans text-sm font-semibold text-zinc-200">{item.result}</p></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
