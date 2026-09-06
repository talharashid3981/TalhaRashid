"use client";

import {
  BriefcaseBusiness,
  ChevronDown,
  CircleHelp,
  Globe2,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

const questions = [
  {
    question: "What is an Agentic AI Specialist?",
    answer:
      "An Agentic AI Specialist designs intelligent systems that can reason through tasks, use tools, and automate multi-step business workflows with the right level of human oversight.",
    icon: BriefcaseBusiness,
  },
  {
    question: "Can you integrate AI into my existing business systems?",
    answer:
      "Yes. I can connect AI workflows with your existing websites, CRMs, APIs, databases, and internal tools while keeping the integration practical and maintainable.",
    icon: Sparkles,
  },
  {
    question: "Why should I choose Flutter for my app development?",
    answer:
      "Flutter lets teams build polished iOS, Android, and web experiences from one codebase, helping maintain visual consistency and reduce duplicated development effort.",
    icon: Smartphone,
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines depend on scope. A focused MVP can take a few weeks, while a larger platform is planned in milestones covering discovery, development, testing, and launch.",
    icon: BriefcaseBusiness,
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes. I provide ongoing improvements, monitoring, bug fixes, performance work, and feature support after the initial product launch.",
    icon: Globe2,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [headingProgress, setHeadingProgress] = useState(0);
  const headingRef = useRef<HTMLDivElement>(null);

  const handlePanelMove = (event: MouseEvent<HTMLElement>) => {
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
      id="faq"
      className="relative z-10 w-full scroll-mt-24 px-4 pb-24 pt-16 sm:px-8 md:pt-24"
    >
      <div className="mx-auto max-w-5xl">
        <div
          ref={headingRef}
          className="relative mb-8 flex w-full justify-center overflow-visible py-4 text-center md:mb-12"
        >
          <div className="relative -m-6 inline-flex items-center justify-center p-6 font-display text-[clamp(2rem,7.5vw,4.5rem)] font-black uppercase leading-none tracking-wider md:text-[clamp(4rem,7vw,7.5rem)] md:tracking-widest">
            <span
              className="section-outline-title whitespace-nowrap"
              aria-hidden="true"
            >
              FAQ
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
              FAQ
            </span>
          </div>
        </div>

        <div
          onMouseMove={handlePanelMove}
          className="faq-panel pointer-glow-card relative overflow-hidden rounded-2xl border border-[#212121] bg-[#0A0A0A] p-4 sm:p-5 md:p-6"
        >
          <div className="relative z-10 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide  text-zinc-300">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DADBDB] text-zinc-200">
              <CircleHelp size={16} />
            </span>
            Common Inquiries
          </div>
          <h2 className="relative z-10 mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="relative z-10 mt-8">
            {questions.map(({ question, answer, icon: Icon }, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={question}
                  className="faq-item border-b border-white/[0.1] last:border-b-0"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center gap-3 py-4 text-left text-sm font-semibold text-zinc-200 transition hover:text-white sm:text-base"
                  >
                    <Icon size={16} className="shrink-0 text-zinc-400" />
                    <span className="flex-1">{question}</span>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-white" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 pl-7 pr-6 text-sm leading-relaxed text-zinc-400">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
