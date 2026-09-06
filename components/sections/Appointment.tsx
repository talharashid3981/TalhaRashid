"use client";

import { ArrowRight, CalendarDays, CheckCircle2, CircleCheck, Mail, UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FormEvent, MouseEvent } from "react";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.28-1.65a11.88 11.88 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43ZM12.09 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.28C2.22 6.45 6.65 2.02 12.08 2.02a9.83 9.83 0 0 1 7 2.91 9.87 9.87 0 0 1 2.9 7.01c0 5.44-4.43 9.86-9.89 9.86Zm5.41-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function Appointment() {
  const [headingProgress, setHeadingProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  const handlePanelMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
  };

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

  const submitAppointment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section id="appointment" className="relative z-10 w-full scroll-mt-24 px-4 pb-24 pt-16 sm:px-8 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <div ref={headingRef} className="relative mb-8 flex w-full justify-center overflow-visible py-4 text-center md:mb-12">
          <div className="relative -m-6 inline-flex items-center justify-center p-6 font-display text-[clamp(2rem,7.5vw,4.5rem)] font-black uppercase leading-none tracking-wider md:text-[clamp(4rem,7vw,7.5rem)] md:tracking-widest">
            <span className="section-outline-title whitespace-nowrap" aria-hidden="true">Appointment</span>
            <span
              className="section-outline-title-active absolute inset-0 flex items-center justify-center whitespace-nowrap"
              aria-hidden="true"
              style={{
                clipPath: `inset(0 ${35 - headingProgress * 35}% 0 ${headingProgress * 35}%)`,
                maskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to right, transparent 0%, transparent ${Math.max(0, headingProgress * 35 - 7)}%, black ${headingProgress * 35}%, black ${65 + headingProgress * 35}%, transparent ${Math.min(100, 72 + headingProgress * 35)}%, transparent 100%)`,
              }}
            >Appointment</span>
          </div>
        </div>

        <div className="mb-14 max-w-4xl">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-white">Let&apos;s build something great together</h2>
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-zinc-400 sm:text-lg">Ready to take your project to the next level? Book a discovery call or a consultation session below. I usually reply within 24 hours for direct messages.</p>
        </div>

        <div onMouseMove={handlePanelMove} className="appointment-panel pointer-glow-card relative overflow-hidden rounded-2xl border border-[#212121] bg-[#0A0A0A]">
          <div className="border-b border-white/[0.1] px-4 py-5 sm:px-6">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-white sm:text-2xl"><CalendarDays size={23} strokeWidth={1.7} />Schedule an Appointment</h3>
            <p className="mt-1 text-sm text-zinc-400 sm:text-base">Provide your details to get started</p>
          </div>
          {submitted ? (
            <div className="flex min-h-[330px] flex-col items-center justify-center px-6 text-center">
              <CheckCircle2 size={42} className="text-emerald-400" />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">Request received</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">Thanks for reaching out. I&apos;ll review your details and get back to you within 24 hours.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-6 rounded-lg border border-white/[0.18] px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:bg-white/10">Send another request</button>
            </div>
          ) : (
            <form onSubmit={submitAppointment} className="grid gap-5 p-5 sm:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-zinc-300"><span className="flex items-center gap-2"><UserRound size={15} />Full Name</span><input required name="name" type="text" placeholder="John Doe" className="appointment-input" /></label>
                <label className="space-y-2 text-sm font-semibold text-zinc-300"><span className="flex items-center gap-2"><Mail size={15} />Email Address</span><input required name="email" type="email" placeholder="john@example.com" className="appointment-input" /></label>
              </div>
              <label className="space-y-2 text-sm font-semibold text-zinc-300"><span className="flex items-center gap-2 text-[#25D366]"><WhatsAppIcon size={17} /><span className="text-zinc-300">WhatsApp Number</span></span><span className="flex gap-2"><span className="appointment-country flex h-12 w-24 items-center justify-center rounded-lg border border-[#494949] bg-[#202020] text-sm text-white">+92</span><input required name="phone" type="tel" placeholder="3XX XXXXXXX" className="appointment-input min-w-0 flex-1" /></span></label>
              <label className="space-y-2 text-sm font-semibold text-zinc-300"><span className="flex items-center gap-2"><CircleCheck size={15} />Agenda / What should we discuss?</span><textarea required name="agenda" rows={1} placeholder="Briefly describe your project or goal..." className="appointment-input min-h-12 resize-y" /></label>
              <button type="submit" className="appointment-submit mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#d9d9d9] text-sm font-semibold text-black transition hover:bg-white">Continue to Schedule <ArrowRight size={17} /></button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
