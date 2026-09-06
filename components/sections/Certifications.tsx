"use client";

import { Award } from "lucide-react";
import { ChevronLeft, ChevronRight, Download, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

const certifications = [
  { issuer: "MICROSOFT", issuerClass: "text-[#f1f1f1]", icon: "/microsoft.svg", date: "Feb 2023", title: "Security Operations Analyst", id: "994591889", accent: "blue" },
  { issuer: "GOOGLE", issuerClass: "text-[#f1f1f1]", icon: "/google.svg", date: "Dec 2020", title: "Digital Marketing", id: "MNEDRAHEE", accent: "red" },
  { issuer: "LONDON APP BREWERY", issuerClass: "text-[#f1f1f1]", icon: "/file.svg", date: "Apr 2020", title: "Dart and Flutter", id: "cert_64chmfgt", accent: "dark" },
  { issuer: "GOOGLE", issuerClass: "text-[#f1f1f1]", icon: "/google.svg", date: "Aug 2024", title: "Google Soft Skill Program", id: "1883970756075771", accent: "green" },
];

export default function Certifications() {
  const [headingProgress, setHeadingProgress] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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

  useEffect(() => {
    if (selectedIndex === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const handleCardMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <section id="certifications" className="relative z-10 w-full scroll-mt-24 px-4 pb-24 pt-16 sm:px-8 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <div ref={headingRef} className="relative mb-8 flex w-full justify-center overflow-visible py-4 text-center md:mb-12">
          <div className="relative -m-6 inline-flex items-center justify-center p-6 font-display text-[clamp(2rem,7.5vw,4.5rem)] font-black uppercase leading-none tracking-wider md:text-[clamp(4rem,7vw,7.5rem)] md:tracking-widest">
            <span className="section-outline-title whitespace-nowrap" aria-hidden="true">Certifications</span>
            <span
              className="section-outline-title-active absolute inset-0 flex items-center justify-center whitespace-nowrap"
              aria-hidden="true"
              style={{
                clipPath: `inset(0 ${35 - headingProgress * 35}% 0 ${headingProgress * 35}%)`,
                maskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)`,
              }}
            >Certifications</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certificate, index) => (
            <article key={certificate.id} onMouseMove={handleCardMove} className="certificate-card pointer-glow-card group relative min-h-[182px] overflow-hidden rounded-2xl border border-[#212121] bg-[#0A0A0A] p-5">
              <div className="relative z-10 flex h-full items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`certificate-issuer inline-flex items-center gap-1.5 font-display text-[11px] font-bold tracking-wide ${certificate.issuerClass}`}><span className="relative h-4 w-4 shrink-0"><Image src={certificate.icon} alt="" fill sizes="16px" className="object-contain" /></span>{certificate.issuer}</span>
                    <span className="certificate-date rounded-full bg-white/[0.16] px-2 py-0.5 font-sans text-[10px] font-semibold text-zinc-300">{certificate.date}</span>
                  </div>
                  <h2 className="mt-3 max-w-[270px] font-display text-lg font-semibold leading-tight text-white sm:text-xl">{certificate.title}</h2>
                  <span className="certificate-id mt-3 inline-flex items-center gap-1.5 rounded border border-white/[0.12] bg-white/[0.05] px-2 py-1 font-mono text-[10px] text-zinc-400"><Award size={12} />ID: {certificate.id}</span>
                </div>
                <button type="button" onClick={() => setSelectedIndex(index)} className="certificate-preview-button shrink-0" aria-label={`Open ${certificate.title} certificate`}>
                  <div className={`certificate-preview certificate-preview-${certificate.accent}`}>
                    <span className="certificate-preview-seal">✦</span>
                    <span className="certificate-preview-line w-3/4" />
                    <span className="certificate-preview-line w-1/2" />
                    <span className="certificate-preview-line w-2/3" />
                    <span className="certificate-preview-signature" />
                  </div>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="certificate-modal fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Certificate details" onClick={() => setSelectedIndex(null)}>
          <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/[0.16] bg-[#1a1a1a] shadow-2xl md:flex-row" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setSelectedIndex(null)} className="absolute right-4 top-4 z-20 rounded-full p-1 text-zinc-300 transition hover:bg-white/10 hover:text-white" aria-label="Close certificate details"><X size={18} /></button>
            <div className="flex min-h-[280px] flex-1 items-center justify-center bg-[#f4f4f4] p-4 sm:p-6">
              <div className={`certificate-preview certificate-preview-large certificate-preview-${certifications[selectedIndex].accent}`}>
                <span className="certificate-preview-brand">{certifications[selectedIndex].issuer}</span>
                <span className="certificate-preview-seal text-3xl">✦</span>
                <strong>{certifications[selectedIndex].title}</strong>
                <span className="certificate-preview-name">Talha Rashid</span>
                <span className="certificate-preview-line w-3/4" /><span className="certificate-preview-line w-1/2" />
                <span className="certificate-preview-signature" />
              </div>
            </div>
            <div className="flex w-full flex-col justify-center p-6 md:w-[320px]">
              <p className="flex items-center gap-2 font-display text-xs font-bold tracking-wide text-white"><span className="relative h-5 w-5"><Image src={certifications[selectedIndex].icon} alt="" fill sizes="20px" className="object-contain" /></span>{certifications[selectedIndex].issuer}</p>
              <h2 className="mt-3 font-display text-xl font-semibold leading-tight text-white">{certifications[selectedIndex].title}</h2>
              <p className="mt-3 text-sm text-zinc-400">Issued in {certifications[selectedIndex].date.replace("2023", "2023").replace("2020", "2020").replace("2024", "2024")}</p>
              <p className="mt-6 text-xs text-zinc-400">Credential ID</p>
              <p className="mt-1 rounded bg-white/[0.08] px-2 py-1.5 font-mono text-xs text-zinc-200">{certifications[selectedIndex].id}</p>
              <div className="mt-8 grid grid-cols-2 gap-2">
                <button type="button" onClick={() => setSelectedIndex((selectedIndex - 1 + certifications.length) % certifications.length)} className="inline-flex items-center justify-center gap-1 rounded-lg border border-white/[0.18] px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-white/10"><ChevronLeft size={14} />Prev</button>
                <button type="button" onClick={() => setSelectedIndex((selectedIndex + 1) % certifications.length)} className="inline-flex items-center justify-center gap-1 rounded-lg border border-white/[0.18] px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-white/10">Next<ChevronRight size={14} /></button>
              </div>
              <button type="button" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"><ExternalLink size={15} />View Full Image</button>
              <button type="button" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-white/[0.08] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.14]"><Download size={15} />Download</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
