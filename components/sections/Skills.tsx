"use client";

import {
  BrainCircuit, Code2, GitBranch, Layers3, LayoutGrid, Network, Palette, Smartphone, Sparkles, Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  { title: "Artificial Intelligence", icon: BrainCircuit, skills: ["Precision Prompt Engineering"] },
  { title: "Programming Languages", icon: Code2, skills: ["Python", "C++", "C", "JavaScript", "HTML"] },
  { title: "Frameworks", icon: LayoutGrid, skills: ["React.js", "Next.js", "FastAPI", "Shopify", "WooCommerce"] },
  { title: "Mobile Development", icon: Smartphone, skills: ["Android Studio"] },
  { title: "Technology & Tools", icon: Wrench, skills: ["Firebase", "Google Cloud Platform (GCP)", "Git", "GitHub", "Jira", "Google Workspace"] },
  { title: "Architecture", icon: Network, skills: ["REST APIs", "MVVM", "MVC", "RESTful Architectures", "Solution Architecture"] },
  { title: "Design & UI/UX", icon: Palette, skills: ["Adobe Photoshop", "Illustrator", "After Effects", "Figma", "Canva"] },
  { title: "Structural Languages", icon: Layers3, skills: ["HTML", "CSS", "SQL", "NoSQL", "JSON", "XML", "Markdown"] },
  { title: "Industry Knowledge", icon: GitBranch, skills: ["E-Commerce", "Project Management", "IT Consulting", "Business Intelligence (BI)", "Entrepreneurship"] },
  { title: "Other Skills", icon: Sparkles, skills: ["Video Editing", "Motion Graphics", "Animation", "Digital Marketing", "SEO", "SMM", "CRM"] },
];

export default function Skills() {
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

  return (
    <section id="skills" className="relative z-10 w-full scroll-mt-24 px-4 pb-24 pt-16 sm:px-8 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <div ref={headingRef} className="relative mb-8 flex w-full justify-center overflow-visible py-4 text-center md:mb-12">
          <div className="relative -m-6 inline-flex items-center justify-center p-6 font-display text-[clamp(2rem,7.5vw,4.5rem)] font-black uppercase leading-none tracking-wider md:text-[clamp(4rem,7vw,7.5rem)] md:tracking-widest">
            <span className="section-outline-title whitespace-nowrap" aria-hidden="true">Skills</span>
            <span
              className="section-outline-title-active absolute inset-0 flex items-center justify-center whitespace-nowrap"
              aria-hidden="true"
              style={{
                clipPath: `inset(0 ${35 - headingProgress * 35}% 0 ${headingProgress * 35}%)`,
                maskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)`,
              }}
            >Skills</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <article key={title} onMouseMove={(event) => {
              const bounds = event.currentTarget.getBoundingClientRect();
              event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
              event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
            }} className="skills-card pointer-glow-card group relative overflow-hidden rounded-2xl border border-[#212121] bg-[#0A0A0A] p-4 sm:p-5">
              <div className="relative z-10">
                <h2 className="flex items-center gap-2 font-display text-base font-semibold text-white sm:text-lg"><Icon size={19} strokeWidth={1.8} />{title}</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((skill) => <span key={skill} className="skill-pill inline-flex items-center rounded-full px-2.5 py-1 font-sans text-[11px] font-semibold text-zinc-200">{skill}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
