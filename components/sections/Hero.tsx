"use client";

import Image from "next/image";
import {
  BriefcaseBusiness,
  CalendarDays,
  FolderGit2,
  Terminal,
  UserRound,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";

const roles = [
  "Software Developer",
  "AI Automation Expert",
  "App Developer",
  "Software Engineer",
  "AI Engineer",
];
const partners = [
  { name: "Microsoft", src: "/microsoft.svg" },
  { name: "DevNation", src: "/devnation.svg" },
  { name: "Google", src: "/google.svg" },
  { name: "Govt of Pakistan", src: "/govt-pakistan.svg" },
  { name: "Punjab Information Technology Board", src: "/pitb.svg" },
  { name: "P@SHA", src: "/pasha-icon.png" },
];
const milestones = [
  {
    year: 2020,
    value: 8,
    technologies: [{ name: "Windows OS", src: "/windows.svg" }],
  },
  {
    year: 2021,
    value: 14,
    technologies: [
      { name: "Microsoft Word", src: "/microsoftword.svg" },
      { name: "Microsoft Excel", src: "/microsoftexcel.svg" },
      { name: "Microsoft PowerPoint", src: "/microsoftpowerpoint.svg" },
    ],
  },
  {
    year: 2022,
    value: 28,
    technologies: [
      { name: "Figma", src: "/figma.svg" },
      { name: "HTML5", src: "/html5.svg" },
      { name: "CSS3", src: "/css3.svg" },
      { name: "JavaScript", src: "/javascript.svg" },
      { name: "GitHub", src: "/github.svg" },
    ],
  },
  {
    year: 2023,
    value: 45,
    technologies: [
      { name: "Python", src: "/python.svg" },
      { name: "C++", src: "/cplusplus.svg" },
    ],
  },
  {
    year: 2024,
    value: 72,
    technologies: [
      { name: "React", src: "/react.svg" },
      { name: "Next.js", src: "/nextdotjs.svg" },
      { name: "Node.js", src: "/nodejs.svg" },
      { name: "Java", src: "/java.svg" },
    ],
  },
  {
    year: 2025,
    value: 86,
    technologies: [
      { name: "OpenAI", src: "/openai.svg" },
      { name: "Claude", src: "/claude.svg" },
      { name: "Google Cloud", src: "/googlecloud.svg" },
      { name: "Gemini", src: "/gemini-icon.svg" },
    ],
  },
  {
    year: 2027,
    value: 96,
    technologies: [
      { name: "AI Automation", src: "/openai.svg" },
      { name: "Cloud Systems", src: "/googlecloud.svg" },
    ],
  },
];
const stats = [
  {
    title: "Total Impact",
    value: "2M+",
    detail: "Across all platforms",
    icon: Users,
  },
  {
    title: "Experience",
    value: "2+ Years",
    detail: "Since 2023 in tech industry",
    icon: BriefcaseBusiness,
  },
  {
    title: "Projects",
    value: "10+",
    detail: "Enterprise & Open Source",
    icon: FolderGit2,
  },
  {
    title: "Tech Stack",
    value: "22+",
    detail: "Languages, tools & frameworks",
    icon: Terminal,
  },
];

function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState(roles[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const timer = window.setTimeout(
      () => {
        if (!deleting && text === role) setDeleting(true);
        else if (deleting && text === "") {
          setDeleting(false);
          setRoleIndex((index) => (index + 1) % roles.length);
        } else
          setText((current) =>
            deleting ? current.slice(0, -1) : role.slice(0, current.length + 1),
          );
      },
      deleting ? 45 : text === role ? 1800 : 85,
    );
    return () => window.clearTimeout(timer);
  }, [deleting, roleIndex, text]);

  return (
    <>
      {text}
      <span className="ml-0.5 animate-pulse select-none">_</span>
    </>
  );
}

const heroDescription = "Full-Stack Software Engineer specializing in Agentic AI automation and high-impact applications. Building modern, scalable, and intelligent systems that deliver exceptional user experiences.";

function TypewriterDescription() {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setText(heroDescription.slice(0, index));
      if (index >= heroDescription.length) window.clearInterval(timer);
    }, 22);
    return () => window.clearInterval(timer);
  }, []);

  return <>{text}<span className="typewriter-cursor" aria-hidden="true">_</span></>;
}

function handleGlowMove(event: MouseEvent<HTMLElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty(
    "--mouse-x",
    `${event.clientX - bounds.left}px`,
  );
  event.currentTarget.style.setProperty(
    "--mouse-y",
    `${event.clientY - bounds.top}px`,
  );
}

function clearGlow(event: MouseEvent<HTMLElement>) {
  event.currentTarget.style.setProperty("--mouse-x", "-300px");
  event.currentTarget.style.setProperty("--mouse-y", "-300px");
}

function Overview() {
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);
  const hovered = milestones.find(
    (milestone) => milestone.year === hoveredMilestone,
  );
  const handleChartMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const chartX = Math.max(
      0,
      Math.min(1, (event.clientX - bounds.left) / bounds.width),
    );
    const targetYear = 2020 + chartX * 7;
    const nearest = milestones.reduce((closest, milestone) =>
      Math.abs(milestone.year - targetYear) <
      Math.abs(closest.year - targetYear)
        ? milestone
        : closest,
    );
    setHoveredMilestone(nearest.year);
  };

  return (
    <section
      id="overview"
      className="relative z-10 w-full scroll-mt-24 bg-transparent px-4 py-10 sm:px-8 md:py-14"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article
                key={stat.title}
                onMouseMove={handleGlowMove}
                onMouseLeave={clearGlow}
                className="pointer-glow-card overview-card relative overflow-hidden rounded-xl border border-white/[0.12] bg-[#0A0A0A] p-4 backdrop-blur-md"
              >
                <div className="relative z-10 mb-5 flex items-center justify-between">
                  <h2 className="font-display text-xs font-semibold text-white">
                    {stat.title}
                  </h2>
                  <Icon size={16} className="text-zinc-500" />
                </div>
                <p className="relative z-10 font-sans text-2xl font-bold tracking-[-0.05em] text-white">
                  {stat.value}
                </p>
                <p className="relative z-10 mt-0.5 font-sans text-xs text-zinc-400">
                  {stat.detail}
                </p>
              </article>
            );
          })}
        </div>

        <article
          onMouseMove={handleGlowMove}
          onMouseLeave={clearGlow}
          className="pointer-glow-card relative mt-6 overflow-hidden rounded-xl border border-white/[0.12] bg-[#0A0A0A] backdrop-blur-md"
        >
          <div className="relative z-10 border-b border-white/[0.1] px-4 pb-4 pt-4">
            <h2 className="font-display text-sm font-semibold text-white">
              Career Growth &amp; Tech Milestones
            </h2>
            <p className="mt-1 font-sans text-sm text-zinc-400">
              Cumulative projects delivered and technologies adopted over time
            </p>
          </div>
          <div className="relative z-10 overflow-x-auto overflow-y-hidden  pt-4">
            <div
              className="relative min-w-[680px]"
              onMouseMove={handleChartMove}
              onMouseLeave={() => setHoveredMilestone(null)}
            >
              {hovered && (
                <div
                  className="chart-tooltip pointer-events-none absolute z-20 w-52 -translate-x-1/2 rounded-lg border border-white/[0.14] bg-[#08080a]/95 p-3 text-left shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
                  style={{
                    left: `${Math.min(86, Math.max(14, ((hovered.year - 2020) / 7) * 98 + 1))}%`,
                    top: `${Math.min(50, Math.max(4, 78 - hovered.value * 0.58))}%`,
                  }}
                >
                  <div className="mb-2 border-b border-white/[0.12] pb-2 font-sans text-[11px] font-semibold text-white">
                    Year: {hovered.year}
                  </div>
                  {hovered.technologies.map((technology) => (
                    <div
                      key={technology.name}
                      className="flex items-center gap-2 py-0.5 font-sans text-[11px] text-zinc-300"
                    >
                      <span className="relative flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden rounded bg-white p-0.5">
                        <Image
                          src={technology.src}
                          alt=""
                          fill
                          className="object-contain p-0.5"
                          sizes="16px"
                        />
                      </span>
                      {technology.name}
                    </div>
                  ))}
                </div>
              )}
              <svg
                viewBox="0 0 900 300"
                className="h-[330px] w-full "
                role="img"
                aria-label="Career growth from 2020 to 2027"
              >
                {[40, 100, 160, 220, 280].map((y) => (
                  <line
                    key={y}
                    x1="8"
                    x2="892"
                    y1={y}
                    y2={y}
                    className="chart-grid-line"
                    stroke="rgba(255,255,255,.1)"
                    strokeWidth="1"
                  />
                ))}
                <path
                  d="M8 280 C110 278 185 267 268 230 S425 152 518 112 S690 63 892 28 L892 280 Z"
                  className="chart-area-fill"
                  fill="#333333"
                  fillOpacity="0.58"
                />
                <path
                  d="M8 280 C110 278 185 267 268 230 S425 152 518 112 S690 63 892 28"
                  fill="none"
                  className="chart-line"
                  stroke="#d9d9df"
                  strokeWidth="1.5"
                />
                {milestones.map((milestone) => {
                  const x = 20 + ((milestone.year - 2020) / 7) * 860;
                  const y = 280 - (milestone.value / 100) * 252;
                  return (
                    <circle
                      key={`hit-${milestone.year}`}
                      cx={x}
                      cy={y}
                      r="24"
                      fill="#000"
                      fillOpacity="0.001"
                    />
                  );
                })}
                {milestones.flatMap((milestone) =>
                  milestone.technologies.map((technology, technologyIndex) => {
                    const x =
                      20 +
                      ((milestone.year - 2020) / 7) * 860 +
                      (technologyIndex -
                        (milestone.technologies.length - 1) / 2) *
                        21;
                    const y =
                      280 -
                      (milestone.value / 100) * 252 -
                      Math.abs(
                        technologyIndex -
                          (milestone.technologies.length - 1) / 2,
                      ) *
                        7;
                    return (
                      <g
                        key={`${milestone.year}-${technology.name}`}
                        className="milestone-point"
                        aria-label={`${technology.name}, ${milestone.year}`}
                      >
                        <circle
                          cx={x}
                          cy={y}
                          r="10"
                          fill="#fff"
                          stroke="#C27AFF"
                          strokeWidth="1.5"
                        />
                        <image
                          href={technology.src}
                          x={x - 7}
                          y={y - 7}
                          width="14"
                          height="14"
                          preserveAspectRatio="xMidYMid meet"
                        />
                        {technologyIndex ===
                          Math.floor(milestone.technologies.length / 2) && (
                          <text
                            x={x}
                            y="296"
                            textAnchor="middle"
                            fontSize="10"
                            fill="#71717a"
                          >
                            {milestone.year}
                          </text>
                        )}
                      </g>
                    );
                  }),
                )}
              </svg>
            </div>
          </div>
          <div className="hero-tools-scroller relative z-10 mx-2 mt-4 overflow-hidden border-t border-white/[0.1] bg-[#101010] p-4">
            <div className="animate-marquee-tools  flex w-max flex-nowrap gap-2">
              {[
                ...milestones.flatMap((milestone) => milestone.technologies),
                ...milestones.flatMap((milestone) => milestone.technologies),
              ].map((technology, index) => (
                <span
                  key={`${technology.name}-${index}`}
                  className="inline-flex shrink-0  items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 font-sans text-[11px] font-semibold text-zinc-400"
                >
                  <span className="relative h-4 w-4">
                    <Image
                      src={technology.src}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="16px"
                    />
                  </span>
                  {technology.name}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <div className="relative w-full">
      <section id="home" className="relative w-full scroll-mt-24">
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-1rem)] w-full max-w-6xl flex-col justify-center px-5 pb-8 pt-28 sm:px-8 lg:min-h-[calc(100svh-4.5rem)] lg:pb-8 lg:pt-28">
          <div className="flex w-full flex-col items-center gap-7 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:text-left">
            <div className="hero-reveal flex w-full shrink-0 items-center justify-center lg:w-[38%]">
              <div className="relative flex aspect-square w-[clamp(210px,37vw,375px)] items-end justify-center">
                <div className="absolute bottom-4 h-36 w-60 rounded-full bg-black/20 blur-3xl" />
                <Image
                  src="/Talharashid.png"
                  alt="Talha Rashid"
                  width={372}
                  height={551}
                  className="profile-portrait relative h-full w-full object-contain drop-shadow-[0_24px_25px_rgba(0,0,0,0.75)]"
                  priority
                />
                <div className="profile-ground-shadow" aria-hidden="true" />
                <div className="profile-bottom-fade" aria-hidden="true" />
              </div>
            </div>
            <div className="flex w-full min-w-0 flex-col items-center gap-4 lg:w-[58%] lg:items-start lg:gap-5">
              <div className="hero-reveal inline-flex min-h-8 items-center rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400 sm:text-xs sm:tracking-widest">
                <TypewriterRole />
              </div>
              <h1 className="hero-reveal w-full font-display text-[clamp(2.65rem,6vw,4.75rem)] font-black leading-[0.94] tracking-[-0.06em] text-white lg:whitespace-nowrap">
                Talha Rashid
              </h1>
              <p className="h-[10.5rem] max-w-2xl overflow-hidden text-[clamp(0.98rem,2vw,1.25rem)] leading-relaxed text-zinc-400 sm:h-[8rem]"><TypewriterDescription /></p>
              <div className="hero-actions flex w-full flex-wrap items-center justify-center gap-2 pt-4 lg:justify-start">
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#16151a] shadow-md shadow-white/10 transition hover:bg-[#F5F5F5] hover:text-black"
                >
                  <CalendarDays size={16} /> Book Appointment
                </a>
                <a
                  href="#profile"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.02] px-4 py-2 text-sm font-medium text-white transition hover:border-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-black"
                >
                  <UserRound size={16} /> Download Profile
                </a>
              </div>
            </div>
          </div>
          <div className="hero-reveal mt-10 w-full overflow-hidden lg:mt-12">
            <div className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Trusted By &amp; Certified Partner
            </div>
            <div className="hero-trusted-scroller relative overflow-hidden before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-gradient-to-r before:from-[#0c0c0f] before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-[#0c0c0f] after:to-transparent">
              <div className="animate-marquee-trusted flex w-max items-center gap-5 py-2.5">
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex shrink-0 items-center gap-3 rounded-xl border border-white/[0.12] bg-white/[0.035] px-4 py-2 transition hover:border-violet-400/40"
                  >
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/20 bg-white p-1 shadow-sm">
                      <Image
                        src={partner.src}
                        alt=""
                        fill
                        className="object-contain p-1"
                        sizes="32px"
                      />
                    </span>
                    <span className="whitespace-nowrap text-xs font-semibold text-zinc-300 sm:text-sm">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Overview />
    </div>
  );
}
