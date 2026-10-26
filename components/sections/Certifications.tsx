"use client";

import { Award } from "lucide-react";
import { ChevronLeft, ChevronRight, Download, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const certifications = [
  { issuer: "NAVTTC", issuerClass: "text-[#f1f1f1]", icon: "/NAVTTC.svg", date: "Dec 2024", title: "JavaScript Fullstack", id: "P-24-893512", image: "/forth_certificate.png", accent: "green" },
  { issuer: "SHELLSHIFT", issuerClass: "text-[#f1f1f1]", icon: "/shellShift.svg", date: "Jul–Oct 2024", title: "JavaScript Fullstack", id: "19 Jul – 18 Oct 2024", image: "/javascript_FullStack.png", accent: "blue" },
  { issuer: "SHELLSHIFT", issuerClass: "text-[#f1f1f1]", icon: "/shellShift.svg", date: "Jan–Apr 2025", title: "Cyber Security", id: "10 Jan – 10 Apr 2025", image: "/cyber_secourity.png", accent: "blue" },
  { issuer: "PEAK SOLUTIONS", issuerClass: "text-[#f1f1f1]", icon: "/peak-solutions.svg", date: "Oct 2022", title: "Foundation", id: "220702/6667", image: "/third_certificate.png", accent: "dark" },
];

export default function Certifications() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isPreviewOpen = selectedIndex !== null;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isPreviewOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleDialogKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
        return;
      }

      if (event.key !== "Tab") return;
      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };
    document.addEventListener("keydown", handleDialogKeyDown);
    return () => {
      document.removeEventListener("keydown", handleDialogKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [isPreviewOpen]);

  const handleCardMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="relative z-10 w-full scroll-mt-24 px-4 pb-24 pt-16 sm:px-8 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading id="certifications-heading" title="Certifications" />

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certificate, index) => (
            <article key={certificate.id} onMouseMove={handleCardMove} className="certificate-card pointer-glow-card group relative min-h-[182px] overflow-hidden rounded-2xl border border-[#212121] bg-[#0A0A0A] p-5">
              <div className="relative z-10 flex h-full items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`certificate-issuer inline-flex items-center gap-1.5 font-display text-[11px] font-bold tracking-wide ${certificate.issuerClass}`}><span className="relative h-4 w-4 shrink-0"><Image src={certificate.icon} alt="" fill sizes="16px" className="object-contain" /></span>{certificate.issuer}</span>
                    <span className="certificate-date rounded-full bg-white/[0.16] px-2 py-0.5 font-sans text-[10px] font-semibold text-zinc-300">{certificate.date}</span>
                  </div>
                  <h3 className="mt-3 max-w-[270px] font-display text-lg font-semibold leading-tight text-white sm:text-xl">{certificate.title}</h3>
                  <span className="certificate-id mt-3 inline-flex items-center gap-1.5 rounded border border-white/[0.12] bg-white/[0.05] px-2 py-1 font-mono text-[10px] text-zinc-400"><Award size={12} />ID: {certificate.id}</span>
                </div>
                <button type="button" onClick={() => setSelectedIndex(index)} className="certificate-preview-button shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-label={`Preview ${certificate.title} certificate from ${certificate.issuer}`}>
                  <div className={`certificate-preview certificate-preview-real certificate-preview-${certificate.accent}`}><Image src={certificate.image} alt={`${certificate.issuer} ${certificate.title} certificate, ${certificate.date}`} fill sizes="96px" className="certificate-image" />
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

      {selectedIndex !== null &&
        createPortal(
          <div
            className="certificate-modal fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/80 p-3 pt-[max(1rem,env(safe-area-inset-top))] backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              ref={dialogRef}
              className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-4xl flex-col overflow-y-auto overscroll-contain rounded-2xl border border-white/[0.16] bg-[#1a1a1a] shadow-2xl md:max-h-[90dvh] md:flex-row md:overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-dialog-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="certificate-modal-close sticky top-2 z-30 -mb-11 mr-2 mt-2 inline-flex h-11 w-11 shrink-0 self-end items-center justify-center rounded-full border border-white/25 bg-[#18181b] text-white shadow-lg transition hover:bg-[#303036] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a] md:absolute md:right-3 md:top-3 md:mr-0 md:mt-0"
                aria-label="Close certificate preview"
              >
                <X size={22} strokeWidth={2.5} />
              </button>
              <div className="flex min-h-[220px] w-full shrink-0 items-center justify-center bg-[#f4f4f4] px-3 pb-4 pt-3 sm:min-h-[280px] sm:p-6 md:min-h-[360px] md:flex-1">
                <div className={`certificate-preview certificate-preview-real certificate-preview-large certificate-preview-${certifications[selectedIndex].accent}`}>
                  <Image
                    src={certifications[selectedIndex].image}
                    alt={`${certifications[selectedIndex].issuer} ${certifications[selectedIndex].title} certificate, ${certifications[selectedIndex].date}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 540px"
                    className="certificate-image certificate-image-large"
                  />
                </div>
              </div>
              <div className="flex w-full shrink-0 flex-col p-5 sm:p-6 md:w-[320px] md:shrink md:justify-center md:overflow-y-auto">
                <p className="flex items-center gap-2 font-display text-xs font-bold tracking-wide text-white">
                  <span className="relative h-5 w-5 shrink-0">
                    <Image src={certifications[selectedIndex].icon} alt="" fill sizes="20px" className="object-contain" />
                  </span>
                  {certifications[selectedIndex].issuer}
                </p>
                <h2 id="certificate-dialog-title" className="mt-3 font-display text-xl font-semibold leading-tight text-white">
                  {certifications[selectedIndex].title}
                </h2>
                <p className="mt-3 text-sm text-zinc-400">
                  Issued in {certifications[selectedIndex].date}
                </p>
                <p className="mt-6 text-xs text-zinc-400">Credential ID</p>
                <p className="mt-1 break-words rounded bg-white/[0.08] px-2 py-1.5 font-mono text-xs text-zinc-200">
                  {certifications[selectedIndex].id}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedIndex((selectedIndex - 1 + certifications.length) % certifications.length)}
                    className="inline-flex min-h-11 items-center justify-center gap-1 rounded-lg border border-white/[0.18] px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                    aria-label="Previous certificate"
                  >
                    <ChevronLeft size={14} />Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex((selectedIndex + 1) % certifications.length)}
                    className="inline-flex min-h-11 items-center justify-center gap-1 rounded-lg border border-white/[0.18] px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                    aria-label="Next certificate"
                  >
                    Next<ChevronRight size={14} />
                  </button>
                </div>
                <a
                  href={certifications[selectedIndex].image}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-3 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  <ExternalLink size={15} />View Full Image
                </a>
                <a
                  href={certifications[selectedIndex].image}
                  download
                  className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white/[0.08] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  <Download size={15} />Download
                </a>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
