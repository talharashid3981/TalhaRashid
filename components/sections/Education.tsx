"use client";

import Image from "next/image";
import { CalendarDays } from "lucide-react";
import type { MouseEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

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
  const handleCardMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative z-10 w-full scroll-mt-24 px-4 pb-24 pt-16 sm:px-8 md:pt-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading id="education-heading" title="Education" />
        <div className="space-y-4">
          {education.map((item) => (
            <article key={item.degree} onMouseMove={handleCardMove} className="education-card pointer-glow-card group relative overflow-hidden rounded-2xl border border-[#212121] bg-[#0A0A0A] p-4 backdrop-blur-md sm:p-5">
              <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1"><Image src={item.logo} alt={`${item.institute} logo`} fill sizes="48px" className="object-contain p-1" /></div>
                  <div className="min-w-0"><h3 className="font-display text-base font-semibold leading-snug text-white sm:text-xl">{item.degree}</h3><p className="mt-1 font-sans text-sm font-semibold text-zinc-300 sm:text-base">{item.institute}</p></div>
                </div>
                <div className="shrink-0 border-t border-white/[0.08] pt-3 text-left sm:border-t-0 sm:pt-0 sm:text-right"><p className="flex items-center gap-1.5 font-sans text-sm text-zinc-400 sm:justify-end"><CalendarDays size={14} className="shrink-0" />{item.period}</p><p className="mt-1 font-sans text-sm font-semibold text-zinc-200">{item.result}</p></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
